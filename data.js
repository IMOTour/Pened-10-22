var APP_DATA = {
  "scenes": [
    {
      "id": "0-street-view",
      "name": "Street view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.1872750751279586,
        "pitch": -0.014572182874104556,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": -0.4554964088510385,
          "pitch": 0.17342810191542668,
          "rotation": 0,
          "target": "14-lower-entrance"
        },
        {
          "yaw": 0.12899313071564933,
          "pitch": -0.3185703621496927,
          "rotation": 0,
          "target": "3-inside-house-3"
        },
        {
          "yaw": 0.7281992423845498,
          "pitch": -0.06469627630789354,
          "rotation": 0,
          "target": "5-street-to-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-inside-house",
      "name": "Inside house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.5632612483520933,
        "pitch": 0.20694974442064407,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": 0.7207230475671178,
          "pitch": -0.09052572865595465,
          "rotation": 0,
          "target": "5-street-to-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-inside-house-2",
      "name": "Inside house 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.30090910006731164,
        "pitch": 0.37336596558282764,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": 0.2268512999252934,
          "pitch": 0.09109648626152556,
          "rotation": 0,
          "target": "3-inside-house-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-inside-house-3",
      "name": "Inside house 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3790872430119698,
        "pitch": 0.27954518670174977,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": 1.0868496362712463,
          "pitch": 0.07389065054415589,
          "rotation": 0,
          "target": "0-street-view"
        },
        {
          "yaw": -0.7955037592862801,
          "pitch": 0.10537585796786608,
          "rotation": 0,
          "target": "2-inside-house-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-under-house",
      "name": "Under house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.1522325794353545,
        "pitch": 0.13846484740434484,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": 1.912417255223498,
          "pitch": 0.07047670906768566,
          "rotation": 0.7853981633974483,
          "target": "14-lower-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-street-to-gate",
      "name": "Street to gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.2271850872216525,
        "pitch": 0.14956822437675044,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": -2.3212099251683345,
          "pitch": 0.03453848431932016,
          "rotation": 0,
          "target": "1-inside-house"
        },
        {
          "yaw": 1.7805787316350727,
          "pitch": 0.10809561855566585,
          "rotation": 0.7853981633974483,
          "target": "3-inside-house-3"
        },
        {
          "yaw": 1.3405097730331388,
          "pitch": 0.2746161447888831,
          "rotation": 3.141592653589793,
          "target": "0-street-view"
        },
        {
          "yaw": -1.7091271602371094,
          "pitch": -0.3093664425484217,
          "rotation": 3.141592653589793,
          "target": "7-top-wall-view"
        },
        {
          "yaw": -1.1878042205663828,
          "pitch": -0.15108181753044647,
          "rotation": 3.9269908169872414,
          "target": "6-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-gate",
      "name": "Gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.5082550495334104,
        "pitch": 0.44248152432016497,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": 2.865818503705027,
          "pitch": 0.3961271382867011,
          "rotation": 0,
          "target": "5-street-to-gate"
        },
        {
          "yaw": -3.020284915541776,
          "pitch": 0.1176472081620723,
          "rotation": 3.141592653589793,
          "target": "7-top-wall-view"
        },
        {
          "yaw": -2.1759408413826673,
          "pitch": 0.2717751580799934,
          "rotation": 0,
          "target": "8-inside-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-top-wall-view",
      "name": "Top wall view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.18758063925463553,
        "pitch": 0.33017927801780544,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": -1.3652387668893304,
          "pitch": 0.30646176258169433,
          "rotation": 3.141592653589793,
          "target": "0-street-view"
        },
        {
          "yaw": -2.3807350290946694,
          "pitch": 0.5844656449185575,
          "rotation": 3.141592653589793,
          "target": "5-street-to-gate"
        },
        {
          "yaw": 2.684429387531548,
          "pitch": -0.026681787673336288,
          "rotation": 3.141592653589793,
          "target": "6-gate"
        },
        {
          "yaw": 1.6693337122616017,
          "pitch": 0.2067892743402595,
          "rotation": 4.71238898038469,
          "target": "8-inside-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-inside-gate",
      "name": "Inside gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.105313505924796,
        "pitch": 0.303580437116306,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": -0.3349678087437553,
          "pitch": -0.12243542210530656,
          "rotation": 0,
          "target": "6-gate"
        },
        {
          "yaw": -2.7848824638862197,
          "pitch": 0.12894718428224294,
          "rotation": 3.141592653589793,
          "target": "9-corner-limit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-corner-limit",
      "name": "Corner-limit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.2511523617140288,
        "pitch": 0.4055593128490358,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": 1.7894545321882864,
          "pitch": -0.046488537420238174,
          "rotation": 6.283185307179586,
          "target": "8-inside-gate"
        },
        {
          "yaw": 2.6272374951412996,
          "pitch": 0.15969542292718764,
          "rotation": 0,
          "target": "10-land-behind-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-land-behind-house",
      "name": "Land behind house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2620196310353311,
        "pitch": 0.04154177765832756,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": -1.635743426647279,
          "pitch": -0.04987739217705034,
          "rotation": 3.141592653589793,
          "target": "9-corner-limit"
        },
        {
          "yaw": -0.3348270899403154,
          "pitch": -0.20210481230155963,
          "rotation": 0,
          "target": "11-behind-house---close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-behind-house---close",
      "name": "Behind house - close",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6093022680910494,
        "pitch": -0.07407860169602287,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": 2.933800706023569,
          "pitch": 0.35237964606499617,
          "rotation": 0,
          "target": "10-land-behind-house"
        },
        {
          "yaw": -0.1263892123664938,
          "pitch": -0.11793755532447925,
          "rotation": 3.141592653589793,
          "target": "12-house-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-house-corner",
      "name": "House corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8599516443554975,
        "pitch": 0.010567377257565624,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": 1.267966098349639,
          "pitch": 0.3194100174238752,
          "rotation": 3.141592653589793,
          "target": "11-behind-house---close"
        },
        {
          "yaw": -0.5635096234726991,
          "pitch": 0.08799504543659253,
          "rotation": 0,
          "target": "13-behind-by-the-house"
        },
        {
          "yaw": 2.9601681032407594,
          "pitch": -0.00651523783566077,
          "rotation": 0,
          "target": "9-corner-limit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-behind-by-the-house",
      "name": "Behind by the house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.8187464820970032,
        "pitch": 0.5893659531426394,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": -2.9117058801217617,
          "pitch": -0.14745183669197104,
          "rotation": 0,
          "target": "12-house-corner"
        },
        {
          "yaw": 1.065603502528921,
          "pitch": 0.22718294918214177,
          "rotation": 4.71238898038469,
          "target": "14-lower-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-lower-entrance",
      "name": "Lower entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.8031910327922205,
        "pitch": 0.07788760763660818,
        "fov": 1.4223091525636793
      },
      "linkHotspots": [
        {
          "yaw": -2.2164960135572116,
          "pitch": 0.038472211483732366,
          "rotation": 3.141592653589793,
          "target": "0-street-view"
        },
        {
          "yaw": 2.426021740056208,
          "pitch": -0.18815172238143418,
          "rotation": 0,
          "target": "4-under-house"
        },
        {
          "yaw": 1.115598243330739,
          "pitch": 0.1303261761692056,
          "rotation": 0,
          "target": "13-behind-by-the-house"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
