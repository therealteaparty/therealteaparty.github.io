import { logoIconsList } from "../constants";


const headings = [
"C#",
"Unreal",
"Unity",
"Java",
"Maya",
"Python",
"PHP",
"HTML/CSS",
"Godot"

];

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const Stripe = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
<div className="marquee-box md:gap-12 gap-5">
{headings.map((heading, index) => (
<h2 key={index} className="text-4xl font-bold text-black">
{heading}
</h2>
))}
 
{headings.map((heading, index) => (
<h2 key={`duplicate-${index}`} className="text-4xl font-bold text-black">
{heading}
</h2>
))}
</div>
</div>
  </div>
);

export default Stripe;
