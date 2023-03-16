import Header from '../components/Header';

const ContainerMain = (props) => {
    return (
        <div className='container-main'>
            <Header />
                { props.children }
        </div>
    );
}
 
export default ContainerMain;