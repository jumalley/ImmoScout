function customAppRun(app) {
    if (app == "hustlerimmo") { //custom app name
        let html = ``
        let html2 = ``
        $('#houses-contentt').html(``)
        $('#owned-contentt').html(``)
        $.post('https://qs-smartphone/getHouses', {}, function(data) {
            if (!data) return
            for (let i = 0; i < Object.keys(data).length; i++) {
                let house = data[i]
                if (!house.owned) {
                    html += `<div class="custom-box">
                        <img style="width: 100px;height: 100px;border-right: 2px;margin-right:2px;border-radius: 10px;" src="./img/custom//shells/${house.tier}.png"></img>
                        <div class="nopadding-nomargin">
                            <p style="font-size: 20px;">${house.label}</p>
                            <p><img style="width: 20px;height: 20px;" src="./img/custom/distance.svg"></img> ${house.distance.toFixed(2)} m</p>
                            <p><img style="width: 20px;height: 20px;" src="./img/custom/price.svg"></img> ${Number(house.price).toLocaleString("de-DE", {minimumFractionDigits: 2})}</p>
                        </div>
                        <div houseid="${house.label}" class="custom-button">
                            <svg class="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 496 496" style="enable-background:new 0 0 496 496;" xml:space="preserve"><g>	<g>		<g>			<path d="M460,208l-24,32h-23.68l-48,56H344v-28.528l-15.68-9.408l31.144-44.496C375.512,190.64,384,163.72,384,135.736				C384,60.888,323.112,0,247.736,0C172.888,0,112,60.888,112,135.736c0,26.784,7.848,52.544,22.584,74.808l-68.52-18.272L35.72,192				L0,245.576v127.576l88,40v20.976L123.36,496h126.856l40-24H312v-24h5.576l72,48H424v-41.888l-15.36-30.728L413.768,408h29.544				L472,379.312v-80.648l24-32V208H460z M128,135.736C128,69.712,181.712,16,248.264,16C314.288,16,368,69.712,368,135.736				c0,24.688-7.488,48.432-21.648,68.664l-79.736,113.904C262.368,324.376,255.408,328,248,328c-7.408,0-14.368-3.624-18.624-9.696				L149.648,204.4C135.488,184.168,128,160.424,128,135.736z M200,480h-67.36L104,429.872v-27.024l-88-40V328h132.368L200,387.008				V480z M155.632,312H16v-61.576L44.28,208h18.672l85.672,22.848l67.64,96.632C223.512,337.824,235.376,344,248,344				c12.624,0,24.488-6.176,31.728-16.52l39.392-56.272l8.88,5.32V304v8v64H211.632L155.632,312z M480,261.336l-24,32v79.352				L436.688,392h-34.456l-10.872,32.616L408,457.888V480h-13.576l-72-48H296v24h-10.216l-40,24H216v-88h128v-80h27.68l48-56H444				l24-32h12V261.336z"/>			<path d="M248,240c57.344,0,104-46.656,104-104S305.344,32,248,32S144,78.656,144,136S190.656,240,248,240z M248,48				c48.52,0,88,39.48,88,88s-39.48,88-88,88c-48.52,0-88-39.48-88-88S199.48,48,248,48z"/>		</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                        </div>
                    </div>`
                }else {
                    html2 += `<div class="custom-box">
                    <img style="width: 100px;height: 100px;border-right: 2px;margin-right:2px;border-radius: 10px;" src="./img/custom//shells/${house.tier}.png"></img>
                    <div class="nopadding-nomargin">
                        <p style="font-size: 20px;">${house.label}</p>
                        <p><img style="width: 20px;height: 20px;" src="./img/custom/distance.svg"></img> ${house.distance.toFixed(2)} m</p>
                    </div>
                    <div houseid="${house.label}" class="custom-button">
                        <svg class="svg-icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 496 496" style="enable-background:new 0 0 496 496;" xml:space="preserve"><g>	<g>		<g>			<path d="M460,208l-24,32h-23.68l-48,56H344v-28.528l-15.68-9.408l31.144-44.496C375.512,190.64,384,163.72,384,135.736				C384,60.888,323.112,0,247.736,0C172.888,0,112,60.888,112,135.736c0,26.784,7.848,52.544,22.584,74.808l-68.52-18.272L35.72,192				L0,245.576v127.576l88,40v20.976L123.36,496h126.856l40-24H312v-24h5.576l72,48H424v-41.888l-15.36-30.728L413.768,408h29.544				L472,379.312v-80.648l24-32V208H460z M128,135.736C128,69.712,181.712,16,248.264,16C314.288,16,368,69.712,368,135.736				c0,24.688-7.488,48.432-21.648,68.664l-79.736,113.904C262.368,324.376,255.408,328,248,328c-7.408,0-14.368-3.624-18.624-9.696				L149.648,204.4C135.488,184.168,128,160.424,128,135.736z M200,480h-67.36L104,429.872v-27.024l-88-40V328h132.368L200,387.008				V480z M155.632,312H16v-61.576L44.28,208h18.672l85.672,22.848l67.64,96.632C223.512,337.824,235.376,344,248,344				c12.624,0,24.488-6.176,31.728-16.52l39.392-56.272l8.88,5.32V304v8v64H211.632L155.632,312z M480,261.336l-24,32v79.352				L436.688,392h-34.456l-10.872,32.616L408,457.888V480h-13.576l-72-48H296v24h-10.216l-40,24H216v-88h128v-80h27.68l48-56H444				l24-32h12V261.336z"/>			<path d="M248,240c57.344,0,104-46.656,104-104S305.344,32,248,32S144,78.656,144,136S190.656,240,248,240z M248,48				c48.52,0,88,39.48,88,88s-39.48,88-88,88c-48.52,0-88-39.48-88-88S199.48,48,248,48z"/>		</g>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                    </div>
                </div>`
                }
            }
            $('#houses-contentt').append(html)
            $('#owned-contentt').append(html2)
        })
    }
}
