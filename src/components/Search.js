export default function Search({ searche, setSearche ,selected,setSelected}) {
    const films = ["batman","naruto","jojo","spiderman"]
  return (
    <div className="d-flex mt-3 shadow container justify-content-around p-3 bg-dark" style={{borderRadius : "15px"}}>
      <h3 className="text-light">Search</h3>
<div className="w-25">

      <input
        className="form-control"
        value={searche}
        onChange={(e) => setSearche(e.target.value)}
        placeholder="Search for a movie..."
      />
    
</div>
  <div className="w-25">
    <select className="form-select" value={selected} onChange={(e)=> setSelected(e.target.value)}>
         <option value={""}>choisi type de films</option>
         {
            films.map((elem,index)=>{
                return <option key={index} value={elem}>{elem}</option>
            })
         }
      </select>
  </div>
    </div>
  );
}
