import logoImage from "../../images/Logo.png"
import backgroundImg from '../../images/bg-card.png'
import backgroundLine from '../../images/Rectangle.png'
export const UserCard = () => {
    return <div style={{
        backgroundColor: "#471CA9",
        width: 380,
    }}>
        <div style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: '36px 28px',
            height: 214,
            padding:20,
        }}>
            <img src={logoImage} alt="logo GoIt" />
    </div>
        <div style={{
            height: 246,
            backgroundImage: `url(${backgroundLine})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: '0 0',
            textAlign: "center",
            display:"flex",
        }
        }>
            <p>TWEETS</p>
            <p>FOLLOWERS</p>
        </div>
    </div>
}