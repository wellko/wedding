function App() {

    return (
        <div className={'max-w-[430px] mx-auto p-x-[20px] bg-[#EBECF0]'}>
            <div className={'flex items-center justify-center flex-col text-[#1F1F1F]'}>
                <h1 className={'wedding-text text-[80px] mt-5 font-semibold'}>Свадьба</h1>
                <div className={'relative my-10'}>
                    {/*<h2 className={'wedding-text text-[80px] absolute left-[50%] -translate-x-1/2'}>Свадьба</h2>*/}
                    <h2 className={'font-medium wedding-text text-[60px] absolute top-[120px] left-[50%] -translate-x-[150px]'}>Айнаргиз</h2>
                    <h2 className={'font-medium wedding-text text-[70px] absolute top-[190px] left-[50%] -translate-x-1/2'}>и</h2>
                    <h2 className={'font-medium wedding-text text-[60px] absolute top-[270px] left-[50%] '}>Валеры</h2>
                    <img className={'object-fill rounded-2xl'} src={'./rings.JPG'} alt={'main'}/>
                </div>
                <h2 className={'wedding-text text-[60px]'}>19:00 | 06.10.2025 </h2>
            </div>
            <div style={{ backgroundImage: "url('/white.JPG')" }} className={'rounded-2xl text-[30px] flex text-center wedding-inner-text items-center justify-center flex-col text-[#1F1F1F]'}>
                <h1 className={'text-[40px] my-2 font-bold'}>Приглашение</h1>
                <p>Сбылась наша мечта, и мы хотим разделить её с вами!
                    Приглашаем вас на нашу свадьбу,
                </p>
                <p>
                    которая состоится 06.10.2025 в Bellagio Premium.
                </p><p>
                Ваше присутствие сделает этот день ещё более особенным.
            </p><p>
                С любовью и теплом,</p><p>
                Айнаргиз и Валерий</p>
            </div>
        </div>
    )
}

export default App
