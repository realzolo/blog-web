const categoryToIcon = {
    java: "<svg t=\"1641371963639\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"11894\" width=\"16\" height=\"16\"><path d=\"M825.628972 580.704642h-89.570828l-5.77041-0.383628c0.383628-6.189204 0.556261-12.413574 0.556261-18.67311V499.164434h187.380075c0 174.272773-140.858743 315.58228-314.92052 316.311174a318.056683 318.056683 0 0 0 84.180849-93.88345h0.035166c64.011589-24.715257 114.676108-76.281302 138.109407-140.887516z\" fill=\"#FF4893\" p-id=\"11895\"></path><path d=\"M603.30355 815.478805c-52.713734 39.257969-118.013674 62.518635-188.770729 62.518635-87.38095 0-166.449952-35.431276-223.680909-92.66543-57.26932-57.234154-92.66543-136.338322-92.66543-223.68091V408.276482H730.843995v153.374618c0 6.259536-0.172633 12.483906-0.556261 18.673111-2.989104 51.323081-18.183984 99.37573-42.803335 141.27434a318.043895 318.043895 0 0 1-84.180849 93.880254z\" fill=\"#42BC90\" p-id=\"11896\"></path><path d=\"M414.532821 900.378958c-90.465961 0-175.522762-35.236265-239.505579-99.222279-63.97962-63.93806-99.219082-148.998058-99.219081-239.505579V408.276482a22.378321 22.378321 0 1 1 44.756642 0v153.374618c0 78.54471 30.578377 152.364397 86.105385 207.85624 55.533402 55.533402 129.353089 86.118173 207.862633 86.118173 63.727064 0 124.381905-20.086142 175.404477-58.090925a293.776204 293.776204 0 0 0 78.253792-87.265861c23.324604-39.699141 37.071287-85.07918 39.759882-131.245656 0.345266-5.600974 0.521095-11.416141 0.521096-17.371971V408.276482a22.378321 22.378321 0 1 1 44.756642 0v153.374618c0 6.873341-0.201405 13.625201-0.601018 20.05737-3.091405 53.122937-18.944847 105.443452-45.843589 151.226299-23.113609 39.363467-53.433037 73.173913-90.107908 100.491449-58.813424 43.797571-128.713709 66.95274-202.143374 66.95274z\" fill=\"#4F46A3\" p-id=\"11897\"></path><path d=\"M730.843995 430.654803H98.183285a22.378321 22.378321 0 1 1 0-44.756642H730.843995a22.378321 22.378321 0 1 1 0 44.756642zM602.191027 996.343592H212.926527a22.378321 22.378321 0 1 1 0-44.756642h389.2645a22.378321 22.378321 0 1 1 0 44.756642zM601.912897 837.895489a22.378321 22.378321 0 1 1 0-44.756642c0.022378 0.003197-0.201405 0.019181-0.425188 0.038363 0.575443-0.047954 1.144491-0.070332 1.719934-0.073529 161.363679-0.674547 292.638107-132.530811 292.638106-293.932853a22.378321 22.378321 0 1 1 44.756642 0c0 185.784821-150.970547 337.596154-336.640279 338.686298-0.687334 0.028772-1.387456 0.038363-2.049215 0.038363z\" fill=\"#4F46A3\" p-id=\"11898\"></path><path d=\"M918.227267 521.545952h-178.34243c-12.359227 0-22.378321-10.015897-22.378321-22.378321s10.019094-22.378321 22.378321-22.378321h178.34243a22.378321 22.378321 0 1 1 0 44.756642zM687.525959 743.983266a22.381518 22.381518 0 0 1-8.065786-43.260491 215.695045 215.695045 0 0 0 125.136374-127.645943 16.208298 16.208298 0 0 1 0.329281-0.853573 22.381518 22.381518 0 1 1 41.578921 16.579139 260.442097 260.442097 0 0 1-150.9162 153.67193 22.477425 22.477425 0 0 1-8.06259 1.508938z\" fill=\"#4F46A3\" p-id=\"11899\"></path><path d=\"M825.73447 603.082963h-89.676326a22.378321 22.378321 0 1 1 0-44.756642h89.570828c12.359227 0 22.432668 10.019094 22.432668 22.378321s-9.967944 22.378321-22.32717 22.378321zM203.227124 354.437439a22.378321 22.378321 0 0 1-22.378321-22.378321c0-31.51507 27.125722-45.443976 46.933733-55.616522 8.468596-4.347788 22.643664-11.627136 22.643664-15.837457 0-4.210321-14.171871-11.489669-22.637271-15.840655-19.808011-10.178939-46.940127-24.114239-46.940126-55.651687 0-31.540645 27.141706-45.479142 46.956111-55.654884 8.459005-4.344591 22.618089-11.614349 22.618089-15.799095a22.378321 22.378321 0 1 1 44.756642 0c0 31.51507-27.125722 45.443976-46.930536 55.613325-8.468596 4.347788-22.643664 11.627136-22.643664 15.840654 0 4.210321 14.171871 11.489669 22.63727 15.840654 19.811208 10.178939 46.940127 24.114239 46.940127 55.651688 0 31.540645-27.13851 45.475945-46.956112 55.651687-8.459005 4.344591-22.621286 11.614349-22.621285 15.802292a22.378321 22.378321 0 0 1-22.378321 22.378321zM394.120596 288.440573a22.378321 22.378321 0 0 1-22.378321-22.378321c0-31.518267 27.13851-45.447173 46.952914-55.616521 8.47499-4.347788 22.656452-11.627136 22.656452-15.837458 0-4.207124-14.178265-11.486472-22.650058-15.837457-19.817602-10.178939-46.959308-24.114239-46.959308-55.651688 0-31.543842 27.151297-45.482339 46.978489-55.658081 8.465399-4.344591 22.634073-11.614349 22.634074-15.795898a22.378321 22.378321 0 1 1 44.756642 0c0 31.518267-27.13851 45.447173-46.952915 55.616522-8.47499 4.347788-22.656452 11.630333-22.656451 15.837457 0 4.207124 14.178265 11.486472 22.650057 15.837458 19.817602 10.178939 46.959308 24.114239 46.959309 55.651687 0 31.543842-27.151297 45.479142-46.97849 55.654885-8.465399 4.344591-22.634073 11.614349-22.634073 15.799094a22.378321 22.378321 0 0 1-22.378321 22.378321zM585.049234 354.437439a22.378321 22.378321 0 0 1-22.378321-22.378321c0-31.51507 27.125722-45.443976 46.933732-55.616522 8.468596-4.347788 22.643664-11.627136 22.643664-15.837457 0-4.210321-14.171871-11.489669-22.63727-15.840655-19.808011-10.178939-46.940127-24.114239-46.940126-55.651687 0-31.540645 27.13851-45.479142 46.956111-55.654884 8.459005-4.344591 22.618089-11.614349 22.618089-15.799095a22.378321 22.378321 0 1 1 44.756642 0c0 31.51507-27.122525 45.443976-46.933733 55.613325-8.465399 4.347788-22.643664 11.627136-22.643664 15.840654 0 4.210321 14.171871 11.489669 22.63727 15.840654 19.808011 10.178939 46.940127 24.114239 46.940127 55.651688 0 31.540645-27.13851 45.475945-46.956112 55.651687-8.459005 4.344591-22.618089 11.614349-22.618088 15.802292a22.378321 22.378321 0 0 1-22.378321 22.378321z\" fill=\"#4F46A3\" p-id=\"11900\"></path><path d=\"M186.654379 616.161494a22.378321 22.378321 0 0 1-22.378321-22.378321v-100.529812a22.378321 22.378321 0 1 1 44.756642 0v100.529812a22.378321 22.378321 0 0 1-22.378321 22.378321z\" fill=\"#FFFFFF\" p-id=\"11901\"></path><path d=\"M210.282689 717.116493a22.378321 22.378321 0 0 1-20.05737-12.426362c-1.998064-4.018507-3.471837-6.381018-4.897655-8.666804-3.928994-6.297899-6.739072-11.339415-9.900809-23.54519a22.375124 22.375124 0 0 1 16.054847-27.27278 22.371927 22.371927 0 0 1 27.27278 16.05165c1.675177 6.473729 2.282589 7.448784 4.545996 11.074072a134.04934 134.04934 0 0 1 7.007611 12.442347 22.378321 22.378321 0 0 1-20.0254 32.343067z\" fill=\"#FFFFFF\" p-id=\"11902\"></path></svg>",
    js: "<svg t=\"1641367425816\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"6055\" width=\"16\" height=\"16\"><path d=\"M128 128h768v768H128V128m201.813333 641.706667c17.066667 36.266667 50.773333 66.133333 108.373334 66.133333 64 0 107.946667-34.133333 107.946666-108.8v-246.613333h-72.533333V725.333333c0 36.693333-14.933333 46.08-38.4 46.08-24.746667 0-34.986667-17.066667-46.506667-37.12l-58.88 35.413334m255.146667-7.68c21.333333 41.813333 64.426667 73.813333 131.84 73.813333 68.266667 0 119.466667-35.413333 119.466667-100.693333 0-60.16-34.56-87.04-96-113.493334l-17.92-7.68c-31.146667-13.226667-44.373333-22.186667-44.373334-43.52 0-17.493333 13.226667-31.146667 34.56-31.146666 20.48 0 34.133333 8.96 46.506667 31.146666l55.893333-37.12c-23.466667-40.96-56.746667-56.746667-102.4-56.746666-64.426667 0-105.813333 40.96-105.813333 95.146666 0 58.88 34.56 86.613333 86.613333 108.8l17.92 7.68c33.28 14.506667 52.906667 23.466667 52.906667 48.213334 0 20.48-19.2 35.413333-49.066667 35.413333-35.413333 0-55.893333-18.346667-71.253333-43.946667l-58.88 34.133334z\" fill=\"#FFCA28\" p-id=\"6056\"></path></svg>",
    javascript: "<svg t=\"1641367425816\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"6055\" width=\"16\" height=\"16\"><path d=\"M128 128h768v768H128V128m201.813333 641.706667c17.066667 36.266667 50.773333 66.133333 108.373334 66.133333 64 0 107.946667-34.133333 107.946666-108.8v-246.613333h-72.533333V725.333333c0 36.693333-14.933333 46.08-38.4 46.08-24.746667 0-34.986667-17.066667-46.506667-37.12l-58.88 35.413334m255.146667-7.68c21.333333 41.813333 64.426667 73.813333 131.84 73.813333 68.266667 0 119.466667-35.413333 119.466667-100.693333 0-60.16-34.56-87.04-96-113.493334l-17.92-7.68c-31.146667-13.226667-44.373333-22.186667-44.373334-43.52 0-17.493333 13.226667-31.146667 34.56-31.146666 20.48 0 34.133333 8.96 46.506667 31.146666l55.893333-37.12c-23.466667-40.96-56.746667-56.746667-102.4-56.746666-64.426667 0-105.813333 40.96-105.813333 95.146666 0 58.88 34.56 86.613333 86.613333 108.8l17.92 7.68c33.28 14.506667 52.906667 23.466667 52.906667 48.213334 0 20.48-19.2 35.413333-49.066667 35.413333-35.413333 0-55.893333-18.346667-71.253333-43.946667l-58.88 34.133334z\" fill=\"#FFCA28\" p-id=\"6056\"></path></svg>",
    vue: "<svg t=\"1641367322969\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2725\" width=\"16\" height=\"16\"><path d=\"M76.416 164.309333L512 916.096 947.584 167.936v-3.626667H778.24L514.56 617.258667 251.989333 164.352z\" fill=\"#41B883\" p-id=\"2726\"></path><path d=\"M252.032 164.309333l262.485333 452.992L778.24 164.309333h-158.848L515.584 342.613333 412.16 164.266667z\" fill=\"#35495E\" p-id=\"2727\"></path></svg>",
    react: "<svg t=\"1641367244121\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1995\" width=\"16\" height=\"16\"><path d=\"M512 431.36c43.946667 0 79.786667 35.84 79.786667 80.64 0 42.666667-35.84 78.933333-79.786667 78.933333S432.213333 554.666667 432.213333 512c0-44.8 35.84-80.64 79.786667-80.64M314.453333 853.333333c26.88 16.213333 85.76-8.533333 153.6-72.533333-22.186667-25.173333-43.946667-52.48-64.426666-81.066667a968.533333 968.533333 0 0 1-102.4-15.36c-21.76 91.306667-13.653333 154.026667 13.226666 168.96m30.293334-244.906666l-12.373334-21.76c-4.693333 12.373333-9.386667 24.746667-12.373333 36.693333 11.52 2.56 24.32 4.693333 37.546667 6.826667l-12.8-21.76m279.04-32.426667l34.56-64-34.56-64c-12.8-22.613333-26.453333-42.666667-38.826667-62.72C561.92 384 537.6 384 512 384s-49.92 0-72.96 1.28c-12.373333 20.053333-26.026667 40.106667-38.826667 62.72L365.653333 512l34.56 64c12.8 22.613333 26.453333 42.666667 38.826667 62.72 23.04 1.28 47.36 1.28 72.96 1.28s49.92 0 72.96-1.28c12.373333-20.053333 26.026667-40.106667 38.826667-62.72M512 289.28c-8.106667 9.386667-16.64 19.2-25.173333 30.72h50.346666c-8.533333-11.52-17.066667-21.333333-25.173333-30.72m0 445.44c8.106667-9.386667 16.64-19.2 25.173333-30.72h-50.346666c8.533333 11.52 17.066667 21.333333 25.173333 30.72M709.12 170.666667c-26.453333-16.213333-85.333333 8.533333-153.173333 72.533333 22.186667 25.173333 43.946667 52.48 64.426666 81.066667 34.986667 3.413333 69.546667 8.533333 102.4 15.36 21.76-91.306667 13.653333-154.026667-13.653333-168.96m-29.866667 244.906666l12.373334 21.76c4.693333-12.373333 9.386667-24.746667 12.373333-36.693333-11.52-2.56-24.32-4.693333-37.546667-6.826667l12.8 21.76m61.866667-300.8c62.72 35.84 69.546667 130.133333 43.093333 240.213334 108.373333 32 186.453333 84.906667 186.453334 157.013333s-78.08 125.013333-186.453334 157.013333c26.453333 110.08 19.626667 204.373333-43.093333 240.213334-62.293333 35.84-147.2-5.12-229.12-83.2-81.92 78.08-166.826667 119.04-229.546667 83.2-62.293333-35.84-69.12-130.133333-42.666666-240.213334-108.373333-32-186.453333-84.906667-186.453334-157.013333s78.08-125.013333 186.453334-157.013333c-26.453333-110.08-19.626667-204.373333 42.666666-240.213334 62.72-35.84 147.626667 5.12 229.546667 83.2 81.92-78.08 166.826667-119.04 229.12-83.2M728.746667 512c14.506667 32 27.306667 64 37.973333 96.426667 89.6-26.88 139.946667-65.28 139.946667-96.426667s-50.346667-69.546667-139.946667-96.426667c-10.666667 32.426667-23.466667 64.426667-37.973333 96.426667M295.253333 512c-14.506667-32-27.306667-64-37.973333-96.426667-89.6 26.88-139.946667 65.28-139.946667 96.426667s50.346667 69.546667 139.946667 96.426667c10.666667-32.426667 23.466667-64.426667 37.973333-96.426667m384 96.426667l-12.8 21.76c13.226667-2.133333 26.026667-4.266667 37.546667-6.826667-2.986667-11.946667-7.68-24.32-12.373333-36.693333l-12.373334 21.76m-123.306666 172.373333c67.84 64 126.72 88.746667 153.173333 72.533333 27.306667-14.933333 35.413333-77.653333 13.653333-168.96-32.853333 6.826667-67.413333 11.946667-102.4 15.36-20.48 28.586667-42.24 55.893333-64.426666 81.066667M344.746667 415.573333l12.8-21.76c-13.226667 2.133333-26.026667 4.266667-37.546667 6.826667 2.986667 11.946667 7.68 24.32 12.373333 36.693333l12.373334-21.76m123.306666-172.373333C400.213333 179.2 341.333333 154.453333 314.453333 170.666667c-26.88 14.933333-34.986667 77.653333-13.226666 168.96a968.533333 968.533333 0 0 1 102.4-15.36c20.48-28.586667 42.24-55.893333 64.426666-81.066667z\" fill=\"#00BCD4\" p-id=\"1996\"></path></svg>",
    others: "<svg t=\"1641371753634\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"2077\" width=\"16\" height=\"16\"><path d=\"M420.470925 315.434175l-242.773735 544.396555c-30.319386 68.028312 5.802308 123.678637 80.264581 123.678637h524.689764c74.486568 0 110.288385-55.516706 79.572192-123.374957l-246.587953-544.700235\" fill=\"#A3F1FF\" p-id=\"2078\"></path><path d=\"M850.392364 851.526101l-239.522337-529.091096h-29.189697l171.919177 485.377409c25.561736 58.889576-4.231271 107.065331-66.218381 107.065331H250.782782c-37.368805 0-63.104651-17.581033-72.138111-44.466813-15.293312 57.039154 19.617711 100.955294 84.80763 100.955295H773.099795c72.35676-0.004049 107.126067-53.929474 77.292569-119.840126z\" fill=\"#8ED2DE\" opacity=\".71\" p-id=\"2079\"></path><path d=\"M401.978853 307.186233L159.205118 851.586837c-17.552689 39.381189-16.722631 77.24398 2.344408 106.619934 19.06299 29.371905 53.305918 45.547913 96.412245 45.547913h524.689764c43.13872 0 77.320912-16.159811 96.250283-45.507422 18.929371-29.34761 19.556976-67.153714 1.765392-106.453922L634.083306 307.085007l-36.882917 16.698336 246.587953 544.708333c11.916393 26.335107 12.305103 50.414887 1.093247 67.805614s-33.315692 26.966761-62.221955 26.966761H257.961771c-28.926508 0-51.103227-9.624623-62.444653-27.10038-11.345475-17.475757-11.106581-41.660812 0.672144-68.08095L438.962997 323.682117l-36.984144-16.495884z\" fill=\"#6E6E96\" p-id=\"2080\"></path><path d=\"M330.225403 497.556991h114.965053v40.490633H330.225403zM259.354649 683.830098h145.345175v40.490632H259.354649z\" fill=\"#6E6E96\" p-id=\"2081\"></path><path d=\"M615.643872 40.077628v275.356547H420.470925V40.077628\" fill=\"#F0F0FF\" p-id=\"2082\"></path><path d=\"M595.398556 40.077628v275.356547a20.245316 20.245316 0 0 1 20.245316-20.245316H420.470925a20.245316 20.245316 0 0 1 20.245316 20.245316V40.077628h-40.490632v275.356547a20.245316 20.245316 0 0 0 20.245316 20.245316h195.172947a20.245316 20.245316 0 0 0 20.245317-20.245316V40.077628h-40.490633z\" fill=\"#6E6E96\" p-id=\"2083\"></path><path d=\"M485.255937 126.849054h65.210164v168.339805H485.255937z\" fill=\"#FFFFFF\" opacity=\".7\" p-id=\"2084\"></path><path d=\"M550.466101 126.849054h44.932455v168.339805h-44.932455z\" fill=\"#6E6E96\" opacity=\".15\" p-id=\"2085\"></path><path d=\"M383.10212 36.235067h264.541499v70.36867H383.10212z\" fill=\"#EBD37A\" p-id=\"2086\"></path><path d=\"M435.739943 42.49087h76.932202v58.711417h-76.932202z\" fill=\"#FFFFFF\" opacity=\".71\" p-id=\"2087\"></path><path d=\"M647.643619 86.358421H383.10212a20.245316 20.245316 0 0 1 20.245317 20.245316V36.235067a20.245316 20.245316 0 0 1-20.245317 20.245316h264.541499a20.245316 20.245316 0 0 1-20.245316-20.245316v70.36867a20.245316 20.245316 0 0 1 20.245316-20.245316z m0-70.36867H383.10212a20.245316 20.245316 0 0 0-20.245316 20.245316v70.36867a20.245316 20.245316 0 0 0 20.245316 20.245317h264.541499a20.245316 20.245316 0 0 0 20.245316-20.245317V36.235067a20.245316 20.245316 0 0 0-20.245316-20.245316z\" fill=\"#6E6E96\" p-id=\"2088\"></path><path d=\"M552.490633 56.480383h83.398556v29.878038h-83.398556z\" fill=\"#6E6E96\" opacity=\".15\" p-id=\"2089\"></path><path d=\"M439.331462 918.712208l92.913854-583.032717H428.018379L196.181164 895.14666s-17.803731 36.421324 243.150298 23.565548z\" fill=\"#FFFFFF\" opacity=\".34\" p-id=\"2090\"></path><path d=\"M196.185213 868.074623l267.226028-493.742774 76.932202-38.652358h-106.733308z\" fill=\"#FFFFFF\" opacity=\".7\" p-id=\"2091\"></path><path d=\"M621.324708 722.551289m-26.318911 0a26.318911 26.318911 0 1 0 52.637822 0 26.318911 26.318911 0 1 0-52.637822 0Z\" fill=\"#FFFFFF\" opacity=\".55\" p-id=\"2092\"></path><path d=\"M495.803747 852.121314m-14.171721 0a14.171721 14.171721 0 1 0 28.343442 0 14.171721 14.171721 0 1 0-28.343442 0Z\" fill=\"#FFFFFF\" p-id=\"2093\"></path><path d=\"M477.582962 603.103923m-20.245316 0a20.245316 20.245316 0 1 0 40.490633 0 20.245316 20.245316 0 1 0-40.490633 0Z\" fill=\"#FFFFFF\" p-id=\"2094\"></path></svg>"
}

export function getCategoryIcon(category: string) {
    category = category.toLowerCase().trim();
    // @ts-ignore
    return categoryToIcon[category] ? categoryToIcon[category] : categoryToIcon["others"];
}