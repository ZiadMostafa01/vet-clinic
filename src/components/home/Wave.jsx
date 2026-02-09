function Wave() {
  return (
    <div className="waves-container bg-[#0e2a47] mb-10">
      <svg
        className="svg-waves fill-primary-container"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="waveHref"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="svg-waves__parallax">
          <use
            xlinkHref="#waveHref"
            x="48"
            y="0"
            fill="rgba(63, 199, 243,0.7)"
          />
          <use
            xlinkHref="#waveHref"
            x="48"
            y="3"
            fill="rgba(63, 199, 243,0.5)"
          />
          <use
            xlinkHref="#waveHref"
            x="48"
            y="5"
            fill="rgba(63, 199, 243,0.3)"
          />
          <use xlinkHref="#waveHref" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  );
}

export default Wave;
