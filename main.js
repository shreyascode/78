var image = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
            var names = ["Family Book","Shreyas Bhardwaj", "Mahesh Bhardwaj", "Sarmishta bhardwaj", "Sarita Bhardwaj", "Soni Singh"];
            var i=0;
            function update()
            {
                i++;
                var number_of_family_member_in_array =5
                if(i >number_of_family_member_in_array)
         
         {
                   i=0;

           }
           var updatedImage= image[i];
           var updatedName = names[i];
           document.getElementById("family_member_image").src = updatedImage;
           document.getElementById("family_member_name").innerHTML=updatedName;
         }