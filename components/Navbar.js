import Image from 'next/image'
import ImageLogo from 'public/image/logo.png'
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <nav className=" fixed box-border w-full p-5">
            <div className="flex fixed justify-between top-4 w-[97%] bg-white shadow-md px-4 rounded-lg">
                <div>
                    <Image
                        src={ImageLogo}
                        alt={'logo tajir'}
                        width={80}
                    />
                </div>
                <div className="flex gap-6">
                    <Button>Beranda</Button>
                    <Button>Tentang</Button>
                    <Button>Workshop</Button>
                    <Button>FAQ</Button>
                </div>
                <div>
                    <p>kskkd</p>
                </div>
            </div>

        </nav>
    )
}

const Link = () => {

}

export default Navbar

// PORT=3000
// SKIP_PREFLIGHT_CHECK=true
// REACT_APP_GATEWAY_URI=https://api-dev.terampil.com
// REACT_APP_GOOGLE_ID=10322583899
// REACT_APP_STAGING=dev