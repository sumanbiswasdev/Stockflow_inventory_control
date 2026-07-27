import logo from '../../assets/logo.png'
import { CiUser } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { LiaCopyright } from "react-icons/lia";

const Logging = () => {

    return(

        <div className="relative bg-[#F2F8FF] h-screen">
            <div className="absolute inset-0 flex flex-col justify-center items-center space-y-5">

                {/* logo */}
                <div className='bg-[#2B7FFF] p-2 rounded-full flex justify-center items-center shadow-md'>
                    <img className='h-16 w-16' 
                    src={logo} 
                    alt="" />
                </div>

                <div className='text-center leading-8'>
                    <h1 className='text-[30px] font-bold text-[#2B7FFF]'>Stock Flow Manager</h1>
                    <p className='text-[15px] font-medium text-gray-500'>Sistema de gerenciamento de Estoque</p>
                </div>
                
                
                <div className='flex flex-col items-start bg-[#E4F1FF] shadow-xl w-xl rounded-xl 
                p-8 border-[0.1rem] border-gray-300 space-y-5'>

                {/* Entrar no Sistema */}    
                    <div className='space-y-1'>
                        <p className='md:text-[20px] lg:text-[16px] font-medium'>Entrar no Sistema</p>
                        <p className='md:text-[18px] lg:text-[14px] font-normal text-gray-500'>Digite suas credenciais para acessar o sistema</p>
                    </div>

                {/* Usuário */}
                    <div className='w-full'>
                        <div className='mb-2'>
                            <label className='block md:text-[20px] lg:text-[16px] font-medium'>Usuário</label>
                        </div>
                        <div className='relative flex items-center'>
                            <div className='absolute left-5 w-5 h-5 text-gray-500'>
                                <p><CiUser /></p>
                            </div>
                            <input className='w-full rounded-md border-[0.1rem] border-gray-300 pl-12 pr-4 py-2 
                            outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all' 
                            type="text" placeholder="Digite seu usuário" />
                        </div>
                        
                    </div>

                {/* Senha */}
                    <div className='w-full'>
                        <div className='mb-2'>
                            <label className='block md:text-[20px] lg:text-[16px] font-medium'>Senha</label>
                        </div>
                        <div className='relative flex items-center'>
                            <div className='absolute left-5 w-5 h-5 text-gray-500'>
                                <p><GoLock /></p>
                            </div>
                            <input className='w-full rounded-md border-[0.1rem] border-gray-300 pl-12 pr-4 py-2 
                            outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all' 
                            type="text" placeholder="Digite sua senha" />
                        </div>
                                               
                    </div>

                    <a href="#" className='bg-black text-white w-full text-center p-2 rounded-md mt-5'>
                        <button className='cursor-pointer'>Entrar</button>
                    </a>

                </div>

                <div className='flex items-center gap-1 mt-8'>
                    <p className='text-[15px] font-light text-gray-500'><LiaCopyright /></p>
                    <p className='text-[15px] font-light text-gray-500'>2026 Stock Flow. Todos os direitos reservados.</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default Logging