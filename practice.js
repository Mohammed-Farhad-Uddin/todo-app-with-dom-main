// const grandParent=document.querySelector(".todo-list");
      // const parent=grandParent.children;
      // console.log(parent);
      // const children=parent[1].children;//ei kon onek array ace.tai kon index tar children hobe oi ta mention kora lagbe
      // console.log(children);


      ///grand parent tekhe direct children a jawar jnno
      // const grandParent=document.querySelector(".todo-list");
      // const children=grandParent.querySelectorAll(".item");///querySelectorAll sob item k dorbe.querySelector just ek ta first item k dorbe.
      // console.log(children);

      ///children tekhe parent e jawar way
      // const children=document.querySelector(".item");
      // const parent=children.parentElement;
      // console.log(parent);
      // const grandParent=parent.parentElement;
      // console.log(grandParent);


      ////children tekhe grandparent a jawa
      // const children=document.querySelector(".item");
      // const grandParent=children.closest(".todo-list")///querySelector niche dikhe jai kintu closest upore dikhe jai selct korar jnno.
      // console.log(grandParent);

      ///select sibling
      // const childrenOne=document.querySelector(".item");
      // console.log(childrenOne);
      // const childrenTwo=childrenOne.nextElementSibling;
      // console.log(childrenTwo);

      // const childrenTwo=document.querySelector(".item").nextElementSibling;
      // console.log(childrenTwo);
      // const childrenOne=childrenTwo.previousElementSibling;
      // console.log(childrenOne);


      //// creating an element
      // const divElement=document.createElement("div");
      // divElement.innerHTML="this is div";
      // divElement.className="red";///inspect korle className id title deka jabe
      // divElement.setAttribute("id","yellow");//id holo attribute
      // divElement.setAttribute("title","white");

      // const container=document.querySelector(".todo-list");

      // const h2Element=container.querySelector("h2");
      ////kono ek ta element er vitor onno element add kora jai ei vabe
      // container.insertBefore(divElement,h2Element);

      ////kono kicur ses e add korte hole append ba appendChild e add kora lage
      // container.appendChild(divElement);
      // container.append(divElement);

      // container.appendChild("hello");//appendChild diye text likha jai na
      // container.append("hello");//append diye text likha jai

      // const a=container.appendChild(divElement);
      // const b=container.append(divElement);
      // console.log(a);
      // console.log(b);

      // container.append(divElement,document.createElement("p"),"hello");//appent sob gula add hobe
      // container.appendChild(divElement,document.createElement("p"),"hello");//appendChild e prothon ta add hobe sudhu



    /////   Event Listener///
    // const formElement=document.querySelector("form");
    // const inputElement=document.querySelector("input[type='text']");

    // // inputElement.addEventListener("keypress",(event)=>{
    // //     // console.log(event.target.value);
    // //     // console.log(event.target);
                ///target dile element ta show hobe
                ///value dile ta input e type kora hobe tai show korbe
    // // })

    // formElement.addEventListener("submit",(event)=>{
    //     event.preventDefault();
    //     // console.log(event.target.value);
    //     console.log(event.target);
    // });