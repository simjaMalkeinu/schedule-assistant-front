import PropTypes from "prop-types";

export default function Container(props) {
  return (
    <section className="shadow-md rounded-sm">
      <header className="p-3 flex justify-between">
        <h2>{props.title}</h2>
        <span>
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 14.9971C9.5746 14.9949 9.15501 14.8981 8.77167 14.7137C8.38834 14.5292 8.05087 14.2617 7.78376 13.9306L0.768464 5.43228C0.358534 4.92066 0.10057 4.30417 0.0239702 3.65307C-0.0526297 3.00197 0.0552145 2.34245 0.335214 1.74966C0.562303 1.23447 0.932887 0.795534 1.40271 0.485276C1.87252 0.175019 2.42172 0.00655382 2.9847 0H17.0153C17.5783 0.00655382 18.1275 0.175019 18.5973 0.485276C19.0671 0.795534 19.4377 1.23447 19.6648 1.74966C19.9448 2.34245 20.0526 3.00197 19.976 3.65307C19.8994 4.30417 19.6415 4.92066 19.2315 5.43228L12.2162 13.9306C11.9491 14.2617 11.6117 14.5292 11.2283 14.7137C10.845 14.8981 10.4254 14.9949 10 14.9971Z"
              fill="#C3C3C3"
            />
          </svg>
        </span>
      </header>
      <footer className="min-h-14 bg-gray-100"></footer>
    </section>
  );
}

Container.propTypes = {
  title: PropTypes.string,
};
