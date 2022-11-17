/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: '0.0.0.0', 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	//ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.137.180",  "::ffff:192.168.137.180"], 	// Set [] to allow all IP addresses
		ipWhitelist: []	,												// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "es",
	locale: "es",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

  electronOptions: {
    webPreferences: {
      webviewTag: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
  },


	modules: [
		{
			module: "alert",
		},
		{
			
    module: 'MMM-Remote-Control',
    // uncomment the following line to show the URL of the remote control on the mirror
     position: 'bottom_left',
    // you can hide this module afterwards from the remote control itself
    		 config: {
        apiKey: 'bc2e979db92f4741afad01d5d18eb8e2'
					}
		},
		
  {
    module: 'MMM-YouTubeWebView',
    position: 'top_center', // This can be any of the regions.
    config: {
      // See 'Configuration options' in README.md for more information.
      video_id: "TiBsRGWhCA", // These are sample YouTube video IDs
      video_list: [
          "RCloP9EDjDE", // They are all videos by Rufus Wainwright
          "wmUVy43tqw4",
          "J_TxPQKcG7w", // Replace these with IDs of your own choosing
          "avWZsKyuRVE",
          "IpkIGGJMHBA", // They need to be publicly accessible videos
          "B9zgwx6mhrk",
          "6KvTDeHlIfI"
      ],
      autoplay: true,
      controls: false,
      loop: true,
      modestbranding: true,
      width: "560px", // Can be a percentage, e.g. 100%
      height: "315px",
      referrer: "http://your.public.domain.org", // Needed when YouTube will not play video
    },
  },
        {
            module: 'MMM-Carousel',
            position: 'bottom_bar', // Required only for navigation controls
            config: {
                transitionInterval: 10000,
                showPageIndicators: true,
                showPageControls: true,
                //ignoreModules: ['clock', 'alert'],
                mode: 'slides',
                slides: {
                    main: ['calendar', 'MMM-Remote-Control',
                    , 'alert','MMM-BackgroundSlideshow'],
                    "Slide 2": ['MMM-YouTubeWebView','MMM-BackgroundSlideshow'],
                    "Slide 3": ['MMM-BackgroundSlideshow']
                }
            }
        },
	{
    module: 'MMM-BackgroundSlideshow',
    position: 'fullscreen_below',
    config: {
      imagePaths: ['modules/MMM-BackgroundSlideshow/exampleImages/'],
      transitionImages: true,
      randomizeImageOrder: true
    }
 },

		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		
		
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},

		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Mexico",
				locationID: "1699805", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "5ca51f2f32220e1fa5e7795d5a3bbc16"
			}
		},
		
		
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Mexico",
				locationID: "1699805", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "5ca51f2f32220e1fa5e7795d5a3bbc16"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Noticias de Mexico",
						url: "https://www.informador.mx/rss/ultimas-noticias.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
