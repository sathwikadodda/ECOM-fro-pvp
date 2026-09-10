function Card({ image, name, price }) {

  return (
    <div
      id="card"
      style={{
        border: '1px solid black',
        borderRadius: '20px',
        width: '250px'
      }}
    >
      <img
        height={250}
        width={250}
        src={image}
        alt={name}
      />

      <p>{name}</p>
      <p>{price} rs</p>
    </div>
  )
}

export default Card