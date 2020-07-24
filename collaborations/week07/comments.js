
  class CommentsModel {
  constructor(type) {
      this.type = type;
      this.comments = getCommentsList(this.type) || [];
      //document.getElementById('commentAddBtn').addEventListener('click', this.addAComment);
  }

  // get all comments
  getAllComments(q=null) {      
      if (q === null) {
          console.log('yo-yo');
          return this.comments;
      } else {
          console.log('yo');
          return this.comments.filter(el => el.name === q);
      }
  }
  //create comments 
  createComments(commentName, comment){
        const newComment = {
          name: commentName,
          comment: comment,
          date: new Date()
        };
        this.comments.push(newComment);
        saveComments(this.type, this.comments)
    }
  }

    //save comments in local storage
  function saveComments(key, comments){
    const newComment = getAllComments();
    newComment.push(comments);
      window.localStorage.setItem(key, JSON.stringify(newComment));
    }
   
    //get comments from local storage
  function getCommentsList(key){
        return JSON.parse(window.localStorage.getItem(key));
    } 
    
    const commentUI=`<div class="addComment">
      <h2>Add a Comment</h2>  
      <input type="text" id="hikeComment" placeholder="Enter your comments here!" />
      <button id="commentAddBtn">Add Comment!</button>
      </div>
      <h2>Comments</h2>
      <ul class="comments"></ul>`;
      //create element
    function createCommentElement(element, comments) {
      element.innerHtml='';
      comments.forEach(el => {
        let item = document.createElement('li');
        item.innerHTML=`
        ${el.name}: ${el.comment}`;
        element.appendChild(item);
      });
    }
        
  class Comments {
    constructor(type, commentElementId) {
      this.type = type;
      this.commentElementId = commentElementId;
      this.model = new CommentsModel(this.type);
    } 
    addSubmitListener(commentName) {
      document.getElementById('commentAddBtn').ontouchend = () => {
        this.model.createComments(
          commentName,
          document.getElementById('#hikeComment').value
        );
        document.getElementById('#hikeComment').value='';
        this.showCommentList(commentName);
      }; 
    } 
      
    showCommentList(q = null) {
      try{
        const parent = document.getElementById(this.commentElementId);
        if (!parent)throw new Error('comment parent not found');
        if(parent.innerHTML === ''){
          parent.innerHTML = commentUI;
        }
        if(q !==null) {
          document.querySelector('.addComment').style.display ='block';
          this.addSubmitListener(q);
        } else {
          document.querySelector('.addComment').style.display = 'none';
        }
        let comments = this.model.getAllComments(q);
        if(comments === null) {
          comments = [];
        }
        createCommentElement(parent.lastChild, comments);
      }catch (error){
        console.log(error);
      }
    }
  }
     
  export default Comments;

  