var uniqueV, firstnameV, middlenameV, surnameV, addressV, emailV;

function readFom() {
  uniqueV = document.getElementById("unique").value;
  firstnameV = document.getElementById("firstname").value;
  middlenameV = document.getElementById("middlename").value;
  surnameV = document.getElementById("surname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  Swal.fire("Succesfully Read Data!");
  console.log(uniqueV, firstnameV, middlenameV, surnameV, addressV, emailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueV)
    .set({
      uniqueID: uniqueV,
      firstname: firstnameV,
      middlename: middlenameV,
      surname: surnameV,
      address: addressV,
      email: emailV,
    });
  Swal.fire("Succesfully Inserted Data!");
  document.getElementById("unique").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueV)
    .on("value", function (snap) {
      document.getElementById("unique").value = snap.val().uniqueid;
      document.getElementById("firstname").value = snap.val().firstname;
      document.getElementById("middlename").value = snap.val().middlename;
      document.getElementById("surname").value = snap.val().suname;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueV)
    .update({
      //   uniqueId: uniqueV,
      firstname: firstnameV,
      middlename: middlenameV,
      surname: surnameV,
      address: addressV,
      email: emailV,
    });
  Swal.fire("Succesfully Update Data!");
  document.getElementById("unique").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + uniqueV)
    .remove();
  Swal.fire("Succesfully Delete Data!");
  document.getElementById("unique").value = "";
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
