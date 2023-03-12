import Header from '../components/Header';
import ContactMe from '../components/ContactMe';

const ContainerMain = (props) => {
    return (
        <div className='container-main'>
            <Header />
                { props.children }
        </div>
    );
}
 
export default ContainerMain;