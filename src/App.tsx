import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import '@leenguyen/react-flip-clock-countdown/dist/index.css';


function App() {
    const texts = ['Сбылась наша мечта, и мы хотим разделить её с вами!\n' +
    '                    Приглашаем вас на нашу свадьбу, которая состоится в', '', 'BELLAGIO PREMIUM', 'Ваше присутствие сделает этот день ещё более особенным.', 'С любовью и теплом,', 'Валерий и Айнаргиз ']
    return (
        <div className={'max-w-[430px] mx-auto p-x-[20px] bg-[#EBECF0]'}>
            <div className={'flex items-center justify-center flex-col text-[#1F1F1F]'}>
                <h1 className={'wedding-text text-[80px] mt-5 font-medium'}>Wedding day</h1>
                <div className={'relative my-10'}>
                    {/*<h2 className={'wedding-text text-[80px] absolute left-[50%] -translate-x-1/2'}>Свадьба</h2>*/}
                    <h2 className={'font-medium wedding-text text-[60px] absolute top-[120px] left-[50%] -translate-x-[150px]'}>Valeriy</h2>
                    <h2 className={'font-medium wedding-text text-[70px] absolute top-[190px] left-[50%] -translate-x-1/2'}>and</h2>
                    <h2 className={'font-medium wedding-text text-[60px] absolute top-[270px] left-[50%] '}>Ainargiz</h2>
                    <img className={'object-fill rounded-2xl'} src={'./rings.JPG'} alt={'main'}/>
                </div>
                <h2 className={'wedding-text text-[60px]'}>18:00 | 06.10.2025 </h2>
            </div>
            <div style={{backgroundImage: "url('/white.JPG')"}}
                 className={'rounded-2xl text-[15px] flex text-center wedding-inner-text items-center justify-center flex-col text-[#1F1F1F] px-[14px] py-[40px]'}>
                <motion.h1 initial={{opacity: 0, y: 50}}
                           whileInView={{opacity: 1, y: 0}}
                           transition={{duration: 0.8}}
                           viewport={{amount: 0.3}} className={'text-[37px] my-2 font-medium mt-[20px]'}>ПРИГЛАШЕНИЕ
                </motion.h1>
                {texts.map((text, i) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, {amount: 0.3});
                    return (
                        <motion.h1
                            key={i}
                            ref={ref}
                            initial={{opacity: 0, y: -50}}
                            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: -50}}
                            transition={{duration: 1}}
                            style={{marginBottom: "40px"}}
                            className={`${text.includes('BELLAGIO') && 'text-[30px]'} ${text.includes('Валерий') && 'text-[23px] font-medium'}`}
                        >
                            {text}
                        </motion.h1>
                    );
                })}
            </div>
            <div className={'flex items-center justify-center flex-col text-[#1F1F1F] wedding-inner-text relative'}>
                <img className={'rounded-2xl'} src={'./banquet.JPG'} alt={'party'}/>
                <div
                    className={'absolute bg-[#EBECF0] text-center text-[25px] left-[50%] -translate-x-[50%] w-[90%] rounded-2xl top-[10%]'}>
                    <p className={'text-[24px]'}>ADDRESS:</p>
                    <p className={'text-[16px]'}>г. Бишкек Улица Токтогула, 125/1</p>
                    <div className={'flex justify-center'}>
                        <a target="_blank"
                           rel="noopener noreferrer"
                           href={'https://2gis.kg/bishkek/firm/70000001047984986?m=74.596991%2C42.872611%2F16'}>
                            <img src={'./2gis.png'} className={'h-[50px] grayscale'} alt={'2gis'}/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer"
                           href={'https://www.google.com/maps/place/Bellagio+Premium/@42.8726079,74.595054,17z/data=!4m6!3m5!1s0x389eb758ee830d77:0x6d52df0c6b1c0b26!8m2!3d42.872604!4d74.5976289!16s%2Fg%2F11mb39sldm?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D'}>
                            <img
                                className={'h-[50px] grayscale'}
                                src="./google.png"
                                alt="Google Maps"
                            /></a>
                    </div>

                </div>
                <div
                    className={'bg-[#EBECF0] text-center text-[30px] rounded-2xl absolute left-[50%] -translate-x-[50%] w-[90%] bottom-[10%]'}>
                    До торжества осталось
                    <div className={'flex justify-center translate-x-[10%] mt-5'}>
                        <FlipClockCountdown digitBlockStyle={{width: 25, height: 40, fontSize: 30}}
                                            to={new Date("2025-10-06T18:00:00+06:00")} className={'w-full'}/>

                    </div>
                </div>
            </div>
            <div className={'flex items-center justify-center flex-col text-[#1F1F1F]'}>
                <motion.h1
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    style={{marginBottom: "40px"}}
                    className={'wedding-text text-[58px] text-center'}>Dress Code
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    className={'text-[14px] uppercase inline-block w-[200px] text-center'}>Нам будет очень
                    приятно, если Ваш наряд будет
                </motion.p>
                <motion.p
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    style={{marginBottom: "40px"}}
                    className={'text-[14px] uppercase inline-block w-[270px] text-center'}>соответствовать
                    цветовой гамме нашей свадьбы
                </motion.p>
                <motion.div
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    style={{marginBottom: "40px"}} className={'flex gap-[10px] mt-[20px]'}>
                    <div className={'w-[50px] h-[50px] rounded-[50%] bg-[#f5f7eb]'}></div>
                    <div className={'w-[50px] h-[50px] rounded-[50%] bg-[#c9c0b5]'}></div>
                    <div className={'w-[50px] h-[50px] rounded-[50%] bg-[#405d4e]'}></div>
                    <div className={'w-[50px] h-[50px] rounded-[50%] bg-[#2a382f]'}></div>
                    <div className={'w-[50px] h-[50px] rounded-[50%] bg-[#000]'}></div>
                </motion.div>

            </div>
        </div>
    )
}

export default App
