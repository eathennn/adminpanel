<template>
    <div>
        <div class="main">
            <h1 style="margin-top: -40px; color:#292e34; font-size: 42px;">Add Courses</h1>
            <input style="width: 900px;" class="form-control mt-5" list="datalistOptions" id="exampleDataList" placeholder="Type Lessons">
            <datalist id="datalistOptions">
                <option value="Frontend"></option>
                <option value="Becend"></option>
                <option value="Mobile"></option>
                <option value="Grafik"></option>
                <option value="3D"></option>
                <option value="Algoritm"></option>
                <option value="Phyton"></option>
                <option value="C++"></option>
                <option value="English"></option>
                <option value="Foundation"></option>
            </datalist>
            <input style="width: 900px; " class="form-control mt-5" type="text" placeholder="Course price">

            <div class="form-floating">
            <textarea style="height: 120px;" class="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">About Course</label>

            <button class="button mt-3">Send</button>
            <div class="main2">
                <h1 style="color:#292e34; font-size: 42px;">Update Courses</h1>
                <input style="width: 900px;" class="form-control mt-5" list="datalistOptions" id="exampleDataList" placeholder="Type Lessons">
            <datalist id="datalistOptions">
                <option value="Frontend"></option>
                <option value="Becend"></option>
                <option value="Mobile"></option>
                <option value="Grafik"></option>
                <option value="3D"></option>
                <option value="Algoritm"></option>
                <option value="Phyton"></option>
                <option value="C++"></option>
                <option value="English"></option>
                <option value="Foundation"></option>
            </datalist>
            <input style="width: 900px; " class="form-control mt-5" type="text" placeholder="Course price">
            <div class="form-floating">
            <textarea style="height: 120px;" class="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">About Courses</label>
            </div>
            <button class="button button-2">Send</button>
            </div>
            </div>     
        </div>
        <div class="main3">
            <h1 style="color:#292e34; font-size: 42px;">Delete Courses</h1>

            <input style="width: 900px;" class="form-control mt-5" list="datalistOptions" id="exampleDataList" placeholder="Type Lessons">
            <datalist id="datalistOptions">
                <option value="Frontend"></option>
                <option value="Becend"></option>
                <option value="Mobile"></option>
                <option value="Grafik"></option>
                <option value="3D"></option>
                <option value="Algoritm"></option>
                <option value="Phyton"></option>
                <option value="C++"></option>
                <option value="English"></option>
                <option value="Foundation"></option>
            </datalist>

            <input style="width: 900px; " class="form-control mt-5" type="text" placeholder="Course price">

            <div class="form-floating">
            <textarea style="height: 120px;" class="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">About Courses</label>
            </div>
            <button class="button button-3">Send</button>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.main{
    position: absolute;
    top: 60px;
    left: 350px;
}
.button{
    background-color: #292e34;
    color: white;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #292e34;
    position: absolute;
    top: 150px;
    
}
.main2{
    position: absolute;
    top: 250px;
}
.button-2{
    margin-top: 285px;
}
.button-3{
    margin-top: 285px;
}
.main3{
    position: absolute;
    top: 1060px;
    left: 350px;
    padding-bottom: 100px;
}
</style>