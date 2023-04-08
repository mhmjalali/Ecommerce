import Header from '@/components/mainComponents/Header';

const ContainerMain = (props) => {
    return (
        <div className='container-main'>
            <Header />
                { props.children }
        </div>
    );
}
 
export default ContainerMain;