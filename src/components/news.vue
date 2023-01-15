<template>
    <div>
        <div class="main">
        <h1 style="color:#292e34; font-size: 42px; margin-top: -40px;">Add News</h1>
            <input style="width: 900px; " class="form-control mt-5" type="text" placeholder="Title">
            <input class="form-control mt-5" type="file" id="formFile">
            
        <div class="form-floating">
                <textarea style="height: 120px;" class="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">About News</label>
                <button class="button mt-3">Send</button>
        </div>  
        </div>
        <div class="main2">
            <h1 style="color:#292e34; font-size: 42px;">Update News</h1>
            <input style="width: 900px; " class="form-control mt-5" type="text" placeholder="Title">
            <input class="form-control mt-5" type="file" id="formFile">
            
        <div class="form-floating">
                <textarea style="height: 120px;" class="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">About News</label>
                <button class="button mt-3">Send</button>
        </div>  
        </div>
        <div class="main3">
            <h1 style="color:#292e34; font-size: 42px;">Delete News</h1>

            <input style="width: 900px; " class="form-control mt-5" type="text" placeholder="Title">
            <input class="form-control mt-5" type="file" id="formFile">
            
        <div class="form-floating">
                <textarea style="height: 120px;" class="form-control mt-5" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">About News</label>
                <button class="button mt-3">Send</button>
        </div>  
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
    top: 530px;
    left: 350px;
}
.main3{
    position: absolute;
    top: 1040px;
    left: 350px;
    padding-bottom: 100px;
}


</style>