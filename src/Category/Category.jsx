import { useParams } from "react-router-dom";

export default function Category(){
    const {category}= useParams();
    console.log({category});
    
    let categoryTitle;

if (category === "grocery-and-grains") {

categoryTitle = "Grocery & Grains";

} else if (category === "grocery-as-gifts") {

categoryTitle = "Grocery as Gifts";

} else if (category === "honey-nuts-and-seeds") {

categoryTitle = "Honey, Nuts & Seeds";

} else if (category === "oil-and-extracts") {

categoryTitle = "Oil & Extracts";

} else {

categoryTitle = "Tea Lovers";

}

return <div>
    <div className="bg-green-100 round-lg px-20 py-24">
        <h2 className="text-3xl font-bold">{categoryTitle}</h2>
    
    </div>
    </div>


}
