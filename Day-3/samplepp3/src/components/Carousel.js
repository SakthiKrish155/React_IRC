import 'bootstrap/dist/js/bootstrap.bundle.min';

function slides(){
  return(
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM=" class="d-blockw-100" alt="english"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.languagemagazine.com/wp-content/uploads/2019/07/french2.jpg" class="d-blockw-100" alt="french" id = "french"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.kopykitab.com/blog/wp-content/uploads/2022/05/image-5.png" class="d-blockw-100" alt="german"/>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.ubitto.com/mcontent/uploads/2019/10/cvxcv.jpg" class="d-blockw-100" alt="korean"/>
    </div>
    <div class="carousel-item">
      <img src="https://blog.keatschinese.com/wp-content/uploads/2020/12/learning-the-chinese-language.jpg" class="d-blockw-100" alt="chinese"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
export default slides;