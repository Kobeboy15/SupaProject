import './Loading.css';

function Loading() {
  return (
    <div className="w-full flex justify-center">
      <div className="lds-ring transform scale-50"><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Loading;