import logo from '../../assets/logo.png'

const Logging = () => {

    return(

        <div className="relative bg-[#F2F8FF] h-screen">
            <div className="absolute inset-0 flex flex-col justify-center items-center space-y-5">
                <div className='bg-[#2B7FFF] p-2 rounded-full flex justify-center items-center shadow-md'>
                    <img className='h-16 w-16' 
                    src={logo} 
                    alt="" />
                </div>

                <div className='text-center leading-8'>
                    <h1 className='text-[30px] font-bold text-[#2B7FFF]'>Stock Flow Manager</h1>
                    <p className='text-[15px] font-medium text-gray-500'>Sistema de gerenciamento de Estoque</p>
                </div>
                
                <div className='flex flex-col items-start bg-[#E4F1FF] rounded-xl 
                p-8 border-[0.1rem] border-gray-300 space-y-5'>
                    <div className='space-y-1'>
                        <p className='md:text-[20px] lg:text-[16px] font-medium'>Entrar no Sistema</p>
                        <p className='md:text-[18px] lg:text-[14px] font-normal text-gray-500'>Digite suas credenciais para acessar o sistema</p>
                    </div>

                    <div className='space-y-1'>
                        <label className='md:text-[20px] lg:text-[16px] font-medium'>Usuário</label>
                        <img src="" alt="" />
                    </div>

                    <div></div>

                    <div></div>

                </div>

                <div></div>
                
            </div>
            
        </div>
    )
}

export default Logging