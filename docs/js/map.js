document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#map')) {
        ymaps.ready(init);

        function init() {
            // Создаем SVG-иконку
            var svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 60 68" width="60" height="68">
	<title>svg_2</title>
	<defs>
		<filter x="-50%" y="-50%" width="200%" height="200%" id="f1"><feDropShadow dx="-1.2246467991473532e-16" dy="2" stdDeviation="2.916666666666667" flood-color="#000000" flood-opacity=".5"/></filter>
		<filter x="-50%" y="-50%" width="200%" height="200%" id="f2"><feDropShadow dx="-1.2246467991473532e-16" dy="2" stdDeviation="2.916666666666667" flood-color="#000000" flood-opacity=".5"/></filter>
		<image width="24" height="24" id="img1" href="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPgoJPHRpdGxlPnN2Z18xPC90aXRsZT4KCTxzdHlsZT4KCQkuczAgeyBmaWxsOiAjZmZmZmZmIH0gCgk8L3N0eWxlPgoJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iczAiIGQ9Im05LjggMThoLTIuNmMtMC4xIDAtMC4yIDAuMS0wLjIgMC4ydjQuOGgtNC40cS0wLjEgMC0wLjIgMC0wLjEtMC4xLTAuMi0wLjItMC4xLTAuMS0wLjItMC4yIDAtMC4xIDAtMC4ydi0yMHEwLTAuMSAwLTAuMiAwLjEgMCAwLjEtMC4xIDAuMSAwIDAuMS0wLjEgMC4xIDAgMC4yIDBoMC42di0wLjZxMC0wLjEgMC0wLjIgMC4xIDAgMC4xLTAuMSAwLjEgMCAwLjEtMC4xIDAuMSAwIDAuMiAwaDEwLjJxMC4xIDAgMC4yIDAgMCAwLjEgMC4xIDAuMSAwIDAuMSAwLjEgMC4xIDAgMC4xIDAgMC4ydjAuNmgwLjZxMC4xIDAgMC4yIDAgMCAwLjEgMC4xIDAuMSAwIDAuMSAwLjEgMC4xIDAgMC4xIDAgMC4ydjE2LjNxMCAwIDAgMC4xIDAgMC4xIDAuMSAwLjEgMCAwIDAuMSAwLjEgMCAwIDAuMSAwIDAgMCAwLjEgMCAwLjEgMCAwLjEtMC4xIDAgMCAwLjEtMC4xIDAgMCAwLTAuMWwwLjQtNC43aDR2LTFoLTMuOWwwLjEtMmgzLjh2LTFoLTMuN2wwLjEtMmg1cTAuMSAwIDAuMiAwIDAuMSAwLjEgMC4yIDAuMiAwLjEgMC4xIDAuMiAwLjIgMCAwLjEgMCAwLjJ2MTMuOHEwIDAuMSAwIDAuMi0wLjEgMC4xLTAuMiAwLjItMC4xIDAuMS0wLjIgMC4yLTAuMSAwLTAuMiAwaC0xMS40di00LjhjMC0wLjEtMC4xLTAuMi0wLjItMC4yem0tMi4zLTN2LTZoLTJ2NnptMi02djZoMnYtNnptLTItMnYtM2gtMnYzem0yLTN2M2gydi0zem0xMC41IDEzdi0xaC0zdjF6Ii8+Cgk8cGF0aCBjbGFzcz0iczAiIGQ9Im0xNi41IDdsMC4xLTFoM2MwLjIgMCAwLjQgMC4yIDAuNCAwLjR2MC42eiIvPgo8L3N2Zz4="/>
	</defs>
	<style>
		.s0 { filter: url(#f1);fill: #ff4433 } 
		.s1 { filter: url(#f2);fill: #ff4433 } 
		.s2 { fill: #ffffff } 
		.s3 { fill: #ff4433 } 
	</style>
	<g>
		<g>
			<path id="ae96eeecd750ec2a83543f00c9bc789d__b" class="s0" d="m30.5 56.5q0 0.1 0 0.2-0.1 0.1-0.1 0.2-0.1 0-0.2 0.1-0.1 0-0.2 0c-0.3 0-0.5-0.2-0.5-0.5q-0.2-4.7-4.8-6.1c-10.2-2.4-17.7-11.5-17.7-22.4 0-12.7 10.3-23 23-23 12.7 0 23 10.3 23 23 0 10.9-7.5 20-17.7 22.4q-4.6 1.4-4.8 6.1z"/>
			<path id="ae96eeecd750ec2a83543f00c9bc789d__b" class="s1" d="m30.5 56.5q0 0.1 0 0.2-0.1 0.1-0.1 0.2-0.1 0-0.2 0.1-0.1 0-0.2 0c-0.3 0-0.5-0.2-0.5-0.5q-0.2-4.7-4.8-6.1c-10.2-2.4-17.7-11.5-17.7-22.4 0-12.7 10.3-23 23-23 12.7 0 23 10.3 23 23 0 10.9-7.5 20-17.7 22.4q-4.6 1.4-4.8 6.1z"/>
		</g>
		<path class="s2" d="m30 68c-2.2 0-4-1.8-4-4 0-2.2 1.8-4 4-4 2.2 0 4 1.8 4 4 0 2.2-1.8 4-4 4z"/>
		<path fill-rule="evenodd" class="s3" d="m30 66c0.5 0 1.1-0.2 1.4-0.6 0.4-0.3 0.6-0.9 0.6-1.4 0-0.5-0.2-1.1-0.6-1.4-0.3-0.4-0.9-0.6-1.4-0.6-0.5 0-1 0.2-1.4 0.6-0.3 0.4-0.6 0.9-0.6 1.4 0 0.5 0.2 1 0.6 1.4 0.4 0.4 0.9 0.6 1.4 0.6z"/>
		<use id="svg_1" href="#img1" transform="matrix(1,0,0,1,18,16)"/>
	</g>
</svg>`;

            let coordinates = [61.247063, 73.406112];
            // let coordinateNameText = '';
            // let coordinateDetailText = '';

            if (document.querySelector('#map-coordinates')) {
                const mapCoordinatesContainer = document.querySelector('#map-coordinates');

                const coordinateText = mapCoordinatesContainer.querySelector('.coordinate').textContent.trim();
                //     coordinateNameText = mapCoordinatesContainer.querySelector('.coordinate-name').innerHTML.trim();
                //     coordinateDetailText = mapCoordinatesContainer.querySelector('.coordinate-detail').innerHTML.trim();
                coordinates = coordinateText.split(',').map(Number);
            }

            // Создаем карту
            var myMap = new ymaps.Map("map", {
                center: coordinates,
                zoom: 17,
                controls: []
            }, {
                // Устанавливаем черно-белую палитру
                geoObjectOpenBalloonIconLayout: "default#image",
                suppressMapOpenBlock: true
            });

            // Добавляем палитру для черно-белого отображения
            myMap.options.set('background', '#ffffff');
            myMap.options.set('suppressObsoleteBrowserNotification', true);
            myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';

            // Создаем метку с SVG-иконкой
            var myPlacemark = new ymaps.Placemark(coordinates, {}, {
                iconLayout: 'default#image',
                iconImageHref: 'data:image/svg+xml;base64,' + btoa(svgIcon),
                iconImageSize: [63, 73],
                iconImageOffset: [-31.5, -73]
            });

            // Создаем дефолтную метку (Placemark) с балуном
            // var myPlacemark = new ymaps.Placemark(coordinates, {
            //     balloonContentHeader: coordinateNameText,
            //     balloonContentBody: coordinateDetailText
            // });

            // Добавляем метку на карту
            myMap.geoObjects.add(myPlacemark);
        }
    }
})