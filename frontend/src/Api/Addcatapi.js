export const Addcat = async (catdata) => {
    const formData = new FormData();

    formData.append('catname', catdata.catname);
    formData.append('nickname', catdata.nickname);
    formData.append('clicks', catdata.clicks);
    formData.append('image', catdata.image);
    console.log(catdata, "data is fetched properly")
    const response = await fetch("http://localhost:5000/addcat", {
        method: "POST",
        body: formData,
    });
    return response.json()
 }
