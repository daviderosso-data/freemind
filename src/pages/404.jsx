import Menu from '../components/menu';
import Footer from '../components/footer';
import NotFound from '../components/NotFound';

export default function NotFoundPage() {
    return (
        <div className="h-screen w-screen owerflow-hidden m-0 p-0">
        <Menu />
        <NotFound />
        <Footer />
        </div>
    );
    }
