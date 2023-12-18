export const CardSceleton = () => {
  return (
    <div className="card card--sceleton"></div>
  )
}

export const Card = ({
  id,
  image,
  title,
  size,
}) => {
  return (
    <div id={`${id}`} className="card" title={title}>
      <picture>
        <source srcSet={`${image}.webp`} type="image/webp" />
        <img width={225} src={`${image}.png`} alt={title} />
      </picture>
      <div className="textbox">
  <span> {title}</span> 
      <p >Размер: <strong>{size}  </strong>см</p>
      </div>
    </div>
  )
}

export default Card
