
const images = [
    { src: "https://img.freepik.com/free-photo/programming-software-code-application-technology-concept_53876-123931.jpg?t=st=1740480711~exp=1740484311~hmac=d7f08bd29a788fae0719ff25afb69feb3d8fe37eb105277e1f7bc58978f3a9ee&w=996", name: "Kajal Kumari", message: "for excellent performance the internship tenure" },
  { src: "https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?t=st=1740480301~exp=1740483901~hmac=37fdf224b1202e951fc7a036acfb4d1d222dc009aedf4a5a80dadf4b08aa6291&w=996", name: "Manoj", message: "for excellent performance the internship tenure" },
  { src: "https://img.freepik.com/free-photo/it-engineer-analyzing-code_1098-21513.jpg?t=st=1740480809~exp=1740484409~hmac=92936c12f5e18e6c954c4a2a177e789f7a6f96670ab260062613b5258cc68d42&w=996", name: "Maanj", message: "for excellent performance the internship tenure" },
 
  { src: "https://img.freepik.com/free-photo/dedicated-businessman-working-late-laptop-dark-office_169016-54965.jpg?t=st=1740480757~exp=1740484357~hmac=6d0c0aaff39c4201a0d3585210050618182452cf33a0d691f55d660fedbfe455&w=996", name: "Bhanu", message: "for excellent performance the internship tenure" },
  { src: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?t=st=1740480919~exp=1740484519~hmac=29646c783053caa4481c7576a6003601230b24b7d6f5e61193a4b89842d000a4&w=996", name: "Bhanu", message: "for excellent performance the internship tenure" },
  { src: "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038857.jpg?t=st=1740480978~exp=1740484578~hmac=49ef76a7e9ebeccfc3f8943e32b11f3db228eca7ddc383d38b36b2229d90223e&w=996", name: "Bhanu", message: "for excellent performance the internship tenure" },
];

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-5 p-3">
      {images.map((img, index) => (
        <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={img.src} alt={img.name} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-end">
            <h3 className="text-white font-bold">{img.name}</h3>
            <p className="text-sm text-white">{img.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
