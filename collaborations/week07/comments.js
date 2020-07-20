class Comment {
  constructor(type) {
      this.type = type;
      this.comments = this.getAllComments();
      //document.getElementById('commentAddBtn').addEventListener('click', this.addAComment);
  }

  // get all comments
  getAllComments(key) {
      let thing = [];
      if (JSON.parse(window.localStorage.getItem(key)) === null) {
          console.log('yo-yo');
          return thing;
      } else {
          console.log('yo');
          return JSON.parse(window.localStorage.getItem(key));
      }
  }

  // add a comment
  addAComment(newName, comment) {
      const newComment = {
        name: newName,
        comment: comment,
        date: new Date()
      };
        this.comments.push(newComment);
        this.addToLS(this.type, this.comments);

      //this.content = document.getElementById('comment').value;
     // this.name = document.getElementById('name').value;
      //let comment = newComment;
      //comment.name = this.name;
      //comment.date = new Date();
     // comment.content = this.content;
      //console.log(comment);
      //this.comments = this.getAllComments();
      //console.log(Array.isArray(this.comments));
      
      
  }
  addToLS(key, data){
    window.localStorage.setItem(key, JSON.stringify(data));
  }
  commentsFilter(q=null){
    return this.comments.filter(el => el.name === q);
  }
  
  commentUI=`<div>
  <h2>Add a Comment</h2>
  <label for="Name">Name</label><br>
  <input name="name" id="name" placeholder="Enter Name of Hike"></input><br>
  <label for="Comment">Comments</label><br>
  <textarea name="comment" id="comment" placeholder="Enter your comments here!"></textarea><br>
  <button id="commentAddBtn">Add Comment!</button>
  </div>
  <div>
  <h2>Comments</h2>
  <ul class="comments"></ul>
  </div>
  `;

  renderComments(){
    document.querySelector(this.comments).innerHTML = '';
    //element.innerHTML = '';
    this.comments.forEach( el => {
      let item = document.createElement('li');
      item.innerHTML= `
      ${el.name}: ${el.comment}`;
      element.appendChild(item);
    });

  }
  addButton(newName){
    document.getElementById('commentAddBtn').ontouchend = () => {
      this.addAComment(
        newName,
        document.getElementById('comment').value
      );
      document.getElementById('comment').value ='';
      this.showCommentList(newName);
      }
     
  }
  showCommentList(q=null){
    try{
      const commentList = document.getElementById(this.comments);
      if(!commentList) throw new Error('comment parent not found');
    
    if(commentList.innerHTML ===''){
      commentList.innerHTML = commentUI;
    }
    if(q !== null){
      document.querySelector('.addAComment').style.display ='block';
      this.addButton(q)
    
    }else{
      document.querySelector('.addAComment').style.display = 'none';
      comments = [];
    }
      renderCommentList(parent.lastChild, comments);
    }catch (error){
      console.log(error);
    }
  }

}
export default Comment;





