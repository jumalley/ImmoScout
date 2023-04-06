
ESX.RegisterServerCallback('phone:server:getHouses', function(source, cb)
    local src = source
    local houses = {all={}, owned={}}
    local xPlayer = ESX.GetPlayerFromId(src)
    MySQL.query('SELECT owned, name, label, price, coords, tier FROM `houselocations`', {}, function(result)
        if result == nil then cb(false) end
        for i=1, #result do
            result[i].coords = json.decode(result[i].coords)
            if not result[i].owned then
                houses.all[#houses.all+1] = result[i]
            elseif result[i].owned then
                local result2 = MySQL.query.await('SELECT house FROM `player_houses` WHERE identifier=? AND house=?', {xPlayer.identifier, result[i].name})
                if result2[1] ~= nil then
                    houses.owned[#houses.owned+1] = result[i]
                end
            end
        end
        cb(houses)
    end)
end)
