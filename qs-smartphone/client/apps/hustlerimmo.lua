
local GLOBAL_HOUSES = {}
RegisterNUICallback('getHouses', function(data, cb)
    local houses = {}
    ESX.TriggerServerCallback('phone:server:getHouses', function(data)
        for i=1,#data.all do
            GLOBAL_HOUSES[#GLOBAL_HOUSES+1] = data.all[i]
            if data.all[i].owned ~= 0 then
                houses[#houses+1] = {
                        label = data.all[i].label,
                        price = data.all[i].price,
                        tier = data.all[i].tier,
                        distance = #(GetEntityCoords(PlayerPedId()) - vector3(data.all[i].coords['enter'].x, data.all[i].coords['enter'].y, data.all[i].coords['enter'].z)),
                        owned = false
                }
            end
        end
        for i=1,#data.owned do
            GLOBAL_HOUSES[#GLOBAL_HOUSES+1] = data.owned[i]
            houses[#houses+1] = {
                label = data.owned[i].label,
                price = data.owned[i].price,
                tier = data.owned[i].tier,
                distance = #(GetEntityCoords(PlayerPedId()) - vector3(data.owned[i].coords['enter'].x, data.owned[i].coords['enter'].y, data.owned[i].coords['enter'].z)),
                owned = true
            }
        end
        table.sort(houses, function (k1, k2) return k1.distance < k2.distance end)
        cb(houses)
    end)
end)

RegisterNUICallback('setHousePosition', function(data, cb)
    for i=1, #GLOBAL_HOUSES do
        if GLOBAL_HOUSES[i].label == data.label then
            SetNewWaypoint(GLOBAL_HOUSES[i].coords['enter'].x, GLOBAL_HOUSES[i].coords['enter'].y)
            cb(true)
        end
    end
    cb(false)
end)
