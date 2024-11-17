import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="bg-[#ffc26f] text-black font-exo w-full">
          <div className="container max-w-full flex flex-col md:flex-row py-4 md:px-14 justify-between items-center space-y-6">
            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start space-y-3">
              <div className="text-[1.6rem] md:text-[1.8rem] lg:text-[1.9rem] font-[500]">Contact Information</div>
              <div className="flex flex-col space-y-2 lg:space-y-4 text-xl lg:text-2xl font-[400]">
                <div className="flex items-center space-x-3 lg:space-x-6">
                  <div className="text-3xl lg:text-4xl font-[200]">
                    <FiPhone />
                  </div>
                  <span className='text-lg lg:text-xl'>+81 1231231231</span>
                </div>
                <div className="flex items-center space-x-3 lg:space-x-6">
                  <div className="text-3xl lg:text-4xl">
                    <FiMail />
                  </div>
                  <span className='text-lg lg:text-xl'>admin@gmail.com</span>
                </div>
              </div>
            </div>
    
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-end space-y-4 md:space-y-5 lg:space-y-6">
              <div>
                <svg className="w-28 h-auto md:w-28 lg:w-32" fill="currentColor" viewBox="0 0 1642 774">
                  <path d="M1283.33 3.66663C1223.2 9.1333 1181.47 17.1333 1137.6 31.6666C1112.67 39.9333 1096.93 47.9333 1088.27 56.3333C1073.87 70.6 1069.73 83 1072.93 101.8C1076.53 122.733 1088.67 139.533 1104.8 145.667C1115.73 149.8 1143.07 150.867 1162 147.8C1169.33 146.6 1182.27 144.733 1190.67 143.533C1199.07 142.467 1220.4 139.133 1238 136.333C1278.4 129.667 1316.8 126.067 1359.33 125C1390 124.2 1395.07 124.333 1422 127.533C1452.27 131.133 1468.27 134.2 1478.67 138.733C1494.13 145.4 1514.8 161.533 1520.13 171.133C1522.27 175 1522.13 200.067 1519.87 210.733C1517.73 221.267 1510.93 227.267 1488.27 238.733C1465.6 250.2 1456.8 252.467 1418.67 257C1379.73 261.533 1357.87 266.6 1332.67 276.6C1306.4 287 1292.8 294.733 1280.13 306.467C1271.73 314.333 1268.67 318.333 1263.73 328.067C1255.6 343.8 1254.13 351.533 1255.07 372.333C1255.87 391.667 1257.07 397.4 1269.33 447.667C1278.93 487 1284 504.6 1307.33 578.333C1335.73 668.6 1352.27 703 1367.47 703C1371.47 703 1377.2 696.333 1379.33 689.267C1383.07 676.733 1384.4 656.467 1383.6 622.333C1382.67 579.533 1381.07 562.067 1373.87 512.333C1370.53 489.933 1365.47 453.667 1362.67 431.667C1359.73 409.667 1357.07 389.267 1356.53 386.2L1355.73 380.867L1370 376.467C1386.93 371.4 1402.53 369.133 1442 366.333C1483.87 363.4 1501.47 359.133 1535.07 343.8C1571.33 327.267 1587.73 316.067 1605.47 295.8C1625.07 273.267 1635.47 247.4 1639.33 211.267C1643.07 175.667 1641.47 153.267 1633.73 131.667C1625.87 109.667 1621.47 102.467 1603.73 82.3333C1588.27 64.7333 1586.13 62.8666 1566 49.2666C1541.87 32.8666 1535.2 29.2666 1517.33 22.6C1497.2 15.1333 1474 9.79996 1441.47 5.5333C1414 1.79996 1407.2 1.39996 1365.33 0.999963C1324.8 0.599963 1315.07 0.86663 1283.33 3.66663Z" fill="currentColor"/>
                  <path d="M939.333 11.6667C927.2 13.9333 921.6 16.3333 911.2 23.8C880.933 45.4 863.733 84.4667 796.267 286.333C757.6 401.667 743.867 452.067 737.2 502.733C733.733 529.667 733.467 547.133 736.533 561.667C739.467 575.533 742.533 581.8 748.667 586.467C752.933 589.667 753.733 589.933 756.667 588.333C758.533 587.4 761.067 585.533 762.533 584.2C765.867 581 773.6 567.133 777.333 557.667C778.933 553.667 782.933 545 786.267 538.467C789.6 531.8 796.4 517.8 801.333 507.133C811.2 485.933 822.667 461.267 846 411.667C876.533 346.867 904.933 283.267 929.467 224.733C937.867 204.733 945.067 188.333 945.467 188.333C948.4 188.333 1003.73 345 1041.33 460.333C1059.2 515 1092 621.4 1092 624.733C1092 627.667 1061.73 632.467 1020 636.333C973.733 640.6 946.933 641.8 864.667 643C756.133 644.6 727.867 647.267 704.133 657.933C694.133 662.333 685.067 669.4 680.667 676.2C678.933 678.867 676.267 686.867 674.667 694.2L671.733 707.4L674.8 721.133C677.467 733.133 678.533 735.933 683.6 742.333C696.4 758.6 716.533 765.133 772 770.6C826.133 775.933 950.933 773.533 1034 765.667C1104.8 759 1130.53 752.2 1170.8 729.533C1204.67 710.467 1225.47 677.667 1225.33 643.533C1225.2 628.067 1222.27 616.6 1201.47 550.333C1163.73 429.667 1104.93 263.8 1067.33 171.667C1022.27 61 1017.07 50.2 1001.47 33.4C994 25.2667 990.8 23 980.4 18.2C973.733 15.1333 965.333 12.2 961.733 11.6667C958.267 11.2667 953.867 10.6 952 10.3333C950.133 10.0667 944.4 10.7333 939.333 11.6667Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex space-x-4">
                {/* Social Links */}
                <a href="#" className="text-2xl md:text-3xl lg:text-4xl text-black hover:text-white transition-colors duration-500">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-2xl md:text-3xl lg:text-4xl text-black hover:text-white transition-colors duration-500">
                  <FaXTwitter />
                </a>
                <a href="#" className="text-2xl md:text-3xl lg:text-4xl text-black hover:text-white transition-colors duration-500">
                  <FaInstagram />
                </a>
                <a href="#http://www.linkedin.com/in/phantuanan" className="text-2xl md:text-3xl lg:text-4xl text-black hover:text-white transition-colors duration-500">
                  <FaLinkedinIn />
                </a>
              </div>
              <div className='text-sm md:text-sm lg:text-md'>
                <p>© AP. All Rights Reserved 2023. Licensing</p>
              </div>
            </div>
          </div>
        </div>
      );    
};

export default Footer;