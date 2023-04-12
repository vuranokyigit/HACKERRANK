

	this.insert=function(head,data){
          //complete this method
         let node = new Node(data);
         if(head==null & head==undefined){//This section of the code handles the actual insertion of the new node into the linked list 
            //This section of the code handles the actual insertion of the new node into the linked list
             head=node;//then the new node becomes the head of the linked list. 
         }else{
             let current =head;
             while(current.next!=null){//Otherwise, the code iterates through the linked list until it finds the last node
                 current = current.next;//and then sets that node's "next" property to the new node,
             }
             current.next =node;//effectively adding the new node to the end of the linked list.
         }
         return head;

   
};