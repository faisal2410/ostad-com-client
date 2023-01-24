import moment from "moment";

const ProductCard=({ p })=> {
  return (
    <div className="card mb-3">
      <img
        src={`${process.env.REACT_APP_API}/product/photo/${p._id}`}
        alt={p.name}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <p>{p.name}</p>
      <p>{moment(p.createdAt).fromNow()}</p>
      <p>{p.sold} sold</p>
    </div>
  );
}

export default ProductCard;
