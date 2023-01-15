<template>
    <div>
    <div class="main">
        <h1 style="color:#292e34; font-size: 42px; margin-top: -40px;">Add Teachers</h1>
        <input style="width: 900px; " class="form-control mt-5" type="text" placeholder="Teacher name">  
       
        <input class="form-control mt-5" type="file" id="formFile">

        <div class="form-floating">
            <textarea style="height: 120px;" class="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">About Teacher</label>
        </div>     
    <button class="button mt-3">Send</button>
    </div>
    <div class="main2">
        <h1 style="color:#292e34; font-size: 42px; margin-top: -40px;">Update Teacher</h1>
        <input style="width: 900px; " class="form-control mt-5" type="text" placeholder="Teacher name">  
       
       <input class="form-control mt-5" type="file" id="formFile">

       <div class="form-floating">
           <textarea style="height: 120px;" class="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
           <label for="floatingTextarea">About Teacher</label>
       </div>     
       <button class="button mt-3">Send</button>
    </div>

    <div class="main3">
        <h1 class="mt-3" style="color:#292e34; font-size: 42px; margin-top: -40px;">Delete Teacher</h1>
        <input style="width: 900px; " class="form-control mt-5" type="text" placeholder="Teacher name">  
       
       <input class="form-control mt-5" type="file" id="formFile">

       <div class="form-floating">
           <textarea style="height: 120px;" class="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
           <label for="floatingTextarea">About Teacher</label>
       </div>     
       <button style="margin-top: 70px;" class="button ">Send</button>
    
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
.teacher-input{
    width: 500px;
    height: 35px;
    border-radius: 15px;
    border: 1px solid rgba(61, 61, 61, 0.824);
    margin-left: -20px;
}
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
    top: 380px;
    
}
.input-file{
    font-size: 18px;
    margin-left: -20px;
}
.main2{
    position: absolute;
    top: 580px;
    left: 350px;
}

.main3{
    position: absolute;
    top: 1050px;
    left: 350px;
    padding-bottom: 100px;
}
</style>