import styles from "../styles/Avatar.module.css";

const Avatar = ({src, height = 45, text})=> {
    return (
      <div className="text-center">
       
        <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
     
      {text}</div>
    )
}

export default Avatar;