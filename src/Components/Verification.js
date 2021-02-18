const Verification = () => {
  return (
    <div className="verification">
      <h2>Verification</h2>
      <form>
        <input
          type="number"
          id="verification-number"
          autoComplete="off"
          placeholder="Enter the verication code"
          required
        />
        <button className="verify-btn">Verify</button>
      </form>
    </div>
  );
};

export default Verification;
