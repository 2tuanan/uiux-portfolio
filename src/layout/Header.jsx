import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const hash = location.hash?.slice(1);
    if (hash) {
      const target = document.getElementById(hash);
      scroll.scrollTo(target.offsetTop, {smooth: true, duration: 500});
    }
  }, [location.hash]);

  const handleScrollAndNavigate = (section) => {
    if (location.pathname === "/uiux-portfolio/") {
      const target = document.getElementById(section);
      if (target) {
        scroll.scrollTo(target.offsetTop, {
          duration: 500,
          smooth: true,
        });
      }
    } else {
      console.log('here');
      window.location.href = `/uiux-portfolio/#${section}`;
      console.log('step 1');
      setTimeout(()=> {
        const target = document.getElementById(section);
        if (target) {
          scroll.scrollTo(target.offsetTop, {
            duration: 500,
            smooth: true,
          });
        }
      })
      console.log('step 2');
      
    }
  }

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto w-full flex items-center justify-between py-4 px-10 md:px-14 lg:px-20 lg:py-6">
        <a className="z-50" href="/uiux-portfolio">
            <svg className="w-28 h-auto md:w-32 lg:w-40 transition-colors duration-500 hover:text-[#ffc26f]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1642 774">
                <path d="M1283.33 3.66663C1223.2 9.1333 1181.47 17.1333 1137.6 31.6666C1112.67 39.9333 1096.93 47.9333 1088.27 56.3333C1073.87 70.6 1069.73 83 1072.93 101.8C1076.53 122.733 1088.67 139.533 1104.8 145.667C1115.73 149.8 1143.07 150.867 1162 147.8C1169.33 146.6 1182.27 144.733 1190.67 143.533C1199.07 142.467 1220.4 139.133 1238 136.333C1278.4 129.667 1316.8 126.067 1359.33 125C1390 124.2 1395.07 124.333 1422 127.533C1452.27 131.133 1468.27 134.2 1478.67 138.733C1494.13 145.4 1514.8 161.533 1520.13 171.133C1522.27 175 1522.13 200.067 1519.87 210.733C1517.73 221.267 1510.93 227.267 1488.27 238.733C1465.6 250.2 1456.8 252.467 1418.67 257C1379.73 261.533 1357.87 266.6 1332.67 276.6C1306.4 287 1292.8 294.733 1280.13 306.467C1271.73 314.333 1268.67 318.333 1263.73 328.067C1255.6 343.8 1254.13 351.533 1255.07 372.333C1255.87 391.667 1257.07 397.4 1269.33 447.667C1278.93 487 1284 504.6 1307.33 578.333C1335.73 668.6 1352.27 703 1367.47 703C1371.47 703 1377.2 696.333 1379.33 689.267C1383.07 676.733 1384.4 656.467 1383.6 622.333C1382.67 579.533 1381.07 562.067 1373.87 512.333C1370.53 489.933 1365.47 453.667 1362.67 431.667C1359.73 409.667 1357.07 389.267 1356.53 386.2L1355.73 380.867L1370 376.467C1386.93 371.4 1402.53 369.133 1442 366.333C1483.87 363.4 1501.47 359.133 1535.07 343.8C1571.33 327.267 1587.73 316.067 1605.47 295.8C1625.07 273.267 1635.47 247.4 1639.33 211.267C1643.07 175.667 1641.47 153.267 1633.73 131.667C1625.87 109.667 1621.47 102.467 1603.73 82.3333C1588.27 64.7333 1586.13 62.8666 1566 49.2666C1541.87 32.8666 1535.2 29.2666 1517.33 22.6C1497.2 15.1333 1474 9.79996 1441.47 5.5333C1414 1.79996 1407.2 1.39996 1365.33 0.999963C1324.8 0.599963 1315.07 0.86663 1283.33 3.66663Z" fill="currentColor"/>
                <path d="M939.333 11.6667C927.2 13.9333 921.6 16.3333 911.2 23.8C880.933 45.4 863.733 84.4667 796.267 286.333C757.6 401.667 743.867 452.067 737.2 502.733C733.733 529.667 733.467 547.133 736.533 561.667C739.467 575.533 742.533 581.8 748.667 586.467C752.933 589.667 753.733 589.933 756.667 588.333C758.533 587.4 761.067 585.533 762.533 584.2C765.867 581 773.6 567.133 777.333 557.667C778.933 553.667 782.933 545 786.267 538.467C789.6 531.8 796.4 517.8 801.333 507.133C811.2 485.933 822.667 461.267 846 411.667C876.533 346.867 904.933 283.267 929.467 224.733C937.867 204.733 945.067 188.333 945.467 188.333C948.4 188.333 1003.73 345 1041.33 460.333C1059.2 515 1092 621.4 1092 624.733C1092 627.667 1061.73 632.467 1020 636.333C973.733 640.6 946.933 641.8 864.667 643C756.133 644.6 727.867 647.267 704.133 657.933C694.133 662.333 685.067 669.4 680.667 676.2C678.933 678.867 676.267 686.867 674.667 694.2L671.733 707.4L674.8 721.133C677.467 733.133 678.533 735.933 683.6 742.333C696.4 758.6 716.533 765.133 772 770.6C826.133 775.933 950.933 773.533 1034 765.667C1104.8 759 1130.53 752.2 1170.8 729.533C1204.67 710.467 1225.47 677.667 1225.33 643.533C1225.2 628.067 1222.27 616.6 1201.47 550.333C1163.73 429.667 1104.93 263.8 1067.33 171.667C1022.27 61 1017.07 50.2 1001.47 33.4C994 25.2667 990.8 23 980.4 18.2C973.733 15.1333 965.333 12.2 961.733 11.6667C958.267 11.2667 953.867 10.6 952 10.3333C950.133 10.0667 944.4 10.7333 939.333 11.6667Z" fill="currentColor"/>
                <path d="M40.6666 130.2C19.8666 135.4 9.86658 144.733 3.73325 165C-0.133421 177.133 -0.533421 201.667 2.79991 205.133C4.66658 206.867 5.46658 207 8.13325 205.533C12.1332 203.533 13.3332 201.933 23.9999 183.8C29.1999 175 33.9999 168.333 35.9999 167.4C39.9999 165.4 54.9332 165.133 65.9999 167C75.8666 168.6 83.4666 173.667 100.267 189.667L112.4 201.4L105.733 209.133C96.5332 219.933 82.7999 239.133 76.2666 250.333C66.1332 267.933 56.2666 295.133 53.3332 314.067C50.9332 329.133 52.2666 363.533 55.8666 375.4C60.9332 392.6 68.2666 402.333 81.0666 408.6C89.1999 412.6 90.9332 413 101.333 412.867C125.067 412.467 150.8 397.533 168 374.467C175.2 364.6 187.2 341 190.133 331C192.267 323.533 192.667 317.933 192.533 291L192.4 259.667L187.333 243C184.667 233.8 182.133 225.4 181.733 224.2C181.333 222.6 183.467 221.4 191.333 219.133C199.733 216.6 203.867 216.067 214.533 216.6C225.467 217 228.267 217.533 233.333 220.6C241.733 225.533 245.867 230.333 251.2 241.133C260 259.267 261.733 267.667 261.867 293C262 314.2 262.267 316.067 265.2 321.667C266.933 325 270.133 329.133 272.267 331C275.733 333.933 276 334.733 274.8 338.333C271.6 347.533 264 393.267 262 413.8C257.067 467.267 261.6 533.533 272.933 572.733C276.933 587.133 287.867 611.267 295.467 623C310.933 646.867 331.867 657.133 356.933 653.133C388.4 647.933 417.867 621.8 438.667 580.467C458.4 541 471.2 502.067 474 472.867L474.933 463.4L483.067 457.533C511.067 437.4 535.067 406.6 545.733 377C564.267 325.667 563.867 243.667 544.8 201C536.4 182.2 520.133 167.667 500.933 161.8C488.4 157.933 466.933 157 449.333 159.4C434.667 161.4 433.333 161 433.333 155.667C433.333 151.667 427.467 143.667 422 140.333C418.8 138.333 414.8 137.267 410.133 137.133C401.867 137 396 140.6 388.667 150.733C383.867 157.267 372 185 372 189.667C372 191 370.667 193 369.067 193.8C363.867 196.467 329.467 231.133 322.4 240.6C318.8 245.667 315.2 249.667 314.667 249.667C314.133 249.667 312.267 245.533 310.8 240.333C304 218.2 291.867 197.267 278.533 185C260.933 168.733 244.8 162.333 218 160.867C199.6 159.8 188.267 161.533 166.4 168.467L149.333 173.933L139.067 164.467C127.6 154.2 107.733 139.667 99.0666 135.133C89.1999 130.2 79.1999 128.333 62.6666 128.467C54.2666 128.467 44.3999 129.267 40.6666 130.2ZM486 215.533C492.133 218.067 494.133 221.8 498 236.733C507.067 272.733 504.8 327.667 492.8 359.533C487.2 374.2 472.933 395.133 469.6 393.267C468.933 392.733 467.867 389.533 467.333 386.067C466.133 377.667 457.2 349 452 336.333C445.867 321.4 437.2 307.4 427.333 296.733L418.667 287.267V279.133C418.667 271.4 420.533 244.333 422.133 230.067L422.8 223L433.733 219.667C452.533 213.8 477.2 211.933 486 215.533ZM142.4 279.933C143.333 311.667 140.133 323.667 125.867 343.267C121.867 348.733 110.667 357.667 107.867 357.667C105.867 357.667 104.933 339.667 106.4 328.467C108.933 307.4 120.4 281.133 135.067 262.6C138.8 257.8 139.2 257.667 140.533 259.933C141.333 261.267 142.133 270.333 142.4 279.933ZM363.2 327.267C363.6 330.467 364.533 342.867 365.333 355C369.467 419.667 379.867 453.4 401.733 473.133C405.2 476.2 409.867 479.133 412 479.667C414.267 480.2 416 481.133 416 481.933C416 485 410.4 505 406.533 515.267C400.533 531.933 383.467 566.2 376.533 575.8C370.133 585 359.6 594.2 352.133 597.267C348.133 599 347.467 598.867 345.067 596.733C341.467 593.533 329.6 568.467 326.533 557.667C317.067 525 313.333 462.467 318 415.667C320.933 385.4 330.933 337 335.067 332.733C336.8 331 358.4 321.8 360.933 321.667C361.733 321.667 362.8 324.2 363.2 327.267Z" fill="currentColor"/>
            </svg>
        </a>

        {/* Desktop Menu */}
        <nav>
          <div className="hidden md:flex items-center justify-between space-x-5 lg:space-x-9">
            <RouterLink
              onClick={() => handleScrollAndNavigate("about")}
              className="cursor-pointer text-black font-exo font-bold tracking-wide 
                    transition-colors duration-500 hover:text-[#ffc26f] text-lg md:text-[1.25rem] lg:text-2xl"
            >ABOUT</RouterLink> 
            <RouterLink
              onClick={() => handleScrollAndNavigate("portfolio")}
              className="cursor-pointer text-black font-exo font-bold tracking-wide 
                    transition-colors duration-500 hover:text-[#ffc26f] text-lg md:text-[1.25rem] lg:text-2xl"
            >PORTFOLIO</RouterLink>
            <RouterLink
              onClick={() => handleScrollAndNavigate("services")}
              className="cursor-pointer text-black font-exo font-bold tracking-wide 
                    transition-colors duration-500 hover:text-[#ffc26f] text-lg md:text-[1.25rem] lg:text-2xl"
            >SERVICES</RouterLink>
            <a href="mailto:pantoan288@gmail.com"
            className="bg-[#ffc26f] text-white font-exo font-bold text-lg tracking-wide rounded-full px-4 md:py-[0.6rem] lg:py-3
            border-2 border-[#ffc26f] transition-all duration-700 hover:bg-white hover:text-[#ffc26f] md:text-[1.25rem] lg:text-2xl"
            >CONTACT ME</a>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`z-10 md:hidden fixed p-5 top-0 left-0 h-full w-3/4 max-w-sm bg-white
             ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full hidden"
        }`}
      > 
        <div className='flex flex-col space-y-5 px-7 pt-[5rem] items-start'>
          <RouterLink
            onClick={() =>{
              handleScrollAndNavigate('about');
              setIsMobileMenuOpen(false);
            }}
            className='cursor-pointer text-black font-exo font-bold text-lg tracking-wide 
            transition-colors duration-500 hover:text-[#ffc26f]'
          >ABOUT</RouterLink>
          <RouterLink
            onClick={() =>{
              handleScrollAndNavigate('portfolio');
              setIsMobileMenuOpen(false);
            }}
            className='cursor-pointer text-black font-exo font-bold text-lg tracking-wide 
            transition-colors duration-500 hover:text-[#ffc26f]'
          >PORTFOLIO</RouterLink>
          <RouterLink
            onClick={() =>{
              handleScrollAndNavigate('services');
              setIsMobileMenuOpen(false);
            }}
            className='cursor-pointer text-black font-exo font-bold text-lg tracking-wide 
            transition-colors duration-500 hover:text-[#ffc26f]'
          >SERVICES</RouterLink>
          <a
            href="mailto:pantoan288@gmail.com"
            className="bg-[#ffc26f] text-white font-exo font-bold text-lg tracking-wide 
          rounded-full py-2 px-4 border-2 border-[#ffc26f] transition-all duration-700 
          hover:bg-white hover:text-[#ffc26f]"
            onClick={() => setIsMobileMenuOpen(false)}
          >CONTACT ME</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
