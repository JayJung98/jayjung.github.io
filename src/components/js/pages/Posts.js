import MarkDown from 'markdown-to-jsx';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import Upload from './Upload';
import '../../css/pages/Posts.css'


function Posts() {

    return (
        <div className='posts'>
            <Header />
                <div className='post_container'>
                <Sidebar className='sidebar' />
                <div className='post_box'>
                    <Upload/>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Posts;
