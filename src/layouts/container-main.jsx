import Header from '../components/Header';
import Footer from '../components/Footer';

const ContainerMain = (props) => {
    return (
        <div className='container-main'>
            <Header />
                { props.children }
            <Footer />
        </div>
    );
}
 
export default ContainerMain;