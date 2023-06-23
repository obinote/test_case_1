import { useEffect, useState } from "react";

function Psbb() {
  const [family, setFamily] = useState(5);
  const [familyMembers, setFamilyMembers] = useState("1 2 4 3 3");
  const [error, setError] = useState("");
  const [bus, setBus] = useState(0);

  const countBus = (family, member) => {
    const cFamily = parseInt(family);
    const members = member
      .trim()
      .split(" ")
      .filter((el) => typeof parseInt(el) !== NaN);
    let allMember = 0;

    if (members.length !== cFamily) {
      console.log("Input must be equal with count of family");
      setError("Input must be equal with count of family");
      return;
    } else {
      setError("");
    }

    members.forEach((el) => {
      allMember += parseInt(el);
    });

    const buses = Math.ceil(allMember / 4);

    console.log("Minimum bus required is : ", buses);

    return buses;
  };

  useEffect(() => {
    const buses = countBus(family, familyMembers);
    setBus(buses);
  }, [family, familyMembers]);

  return (
    <>
      <h1>PSBB</h1>
      <div>
        <label>Family</label>
        <input
          type="text"
          onChange={(e) => setFamily(e.target.value)}
          value={family}
        />
      </div>
      <div>
        <label>Family Member</label>
        <input
          type="text"
          onChange={(e) => setFamilyMembers(e.target.value)}
          value={familyMembers}
        />
      </div>
      <div>
        {!error && (
          <p>
            Minimum bus required is : <label>{bus}</label>
          </p>
        )}
        {error && (
            <p>{error}</p>
        )}
      </div>
    </>
  );
}

export default Psbb;
