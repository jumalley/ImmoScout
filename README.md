# ImmoScout-qs-smartphone - <b>Requires working qs-housing</b>

ESX and QS-housing fork from Ju.

<p>Preview (QBCORE): https://streamable.com/4camzi</p>

<p>All data is pulled from houselocations and player_houses table. <b>You still need to create the houses with qb-houses.</b></p>
<p>Houses are sorted by distance to player (nearest first)</p>
<p>Sample pictures are provided according to the house-tier (some tier pictures are currently replaced by a placeholder)</p>

![screen_unowned](https://user-images.githubusercontent.com/28263145/205501994-8f5e4f26-21d7-43b8-9c5d-e196b8154c23.png)

![screen_owned](https://user-images.githubusercontent.com/28263145/205501995-c905c14e-2c72-4e7e-82f3-8b1f85e3a957.png)

Installing:<br>
customAppRun.js   ->  [smartphone]\qs-smartphone\html\apps<br>
hustlerimmo.html  ->  [smartphone]\qs-smartphone\html\apps<br>
hustlerimmo.lua   ->  [smartphone]\qs-smartphone\client\apps<br>
hustlerimmo.lua   ->  [smartphone]\qs-smartphone\server\apps<br>

custom folder     ->  [smartphone]\qs-smartphone\html\img<br>
immoscout.png     ->  [smartphone]\qs-smartphone\html\img\apps<br>

Additions to fxmanifest.lua:<br>
    'html/img/custom/*.svg',<br>
    'html/img/custom/*.png',<br>
    'html/img/custom/shells/*.png',<br>

Don't forget to add the app to your config.lua - e.g.:

    ["hustlerimmo"] = {
        custom = true,
        app = "hustlerimmo",
        color = "img/apps/immoscout24.png",
        tooltipText = "ImmoScout24",
        tooltipPos = "top",
        job = false,
        blockedjobs = {},
        slot = 44,
        creator = "anda.",
        Alerts = 0,
        password = false,
        isGame = false,
        description = "buy and manage real-estate",
        score = "5", -- Options: 0, 0.25, 0.5, 0.75, 1, 1.25, 1.50, 1.75, 2, 2.25, 2.50, 2.75, 3, 3.25, 3.50, 3.75, 4, 4.25, 4.50, 4.75, 5
        rating = " 332 Ratings",
        age = "18+",
        extraDescription = {
            {
                header = "Immoscout24",
                head = "Immoscout24!",
                image = "https://i.imgur.com/ENBVOUI.png",--You may want to change this
                footer = "buy and manage real-estate.",
                textcolor = 'black'
            }
        }
    },

To have a working homebar  you need to add the apps name in [smartphone]\qs-smartphone\config\config_javascript.js:

    "hustlerimmo": {
        "top": "#000000",
        "bottom": "#000000"
    },
