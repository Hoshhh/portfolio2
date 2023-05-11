import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full pt-20">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-slate-800">
          Arcane Acre's (work in progress)
        </p>
        <h2 className="py-4">Overview</h2>
        <div className="col-span-4">
          <p>
            The inventory system is the first feature I worked on in this game
            because after doing some research on the topic, I learned that many
            people hate when an inventory system is hard to manage. I made it my
            goal to make all inventory systems in this game as easy to work with
            as possible so players would have the best experience possible.
          </p>
          <p className="py-4">
            Some features that I've implemented, that I'll be going over later,
            are <span className="font-bold text-indigo-700">auto-sorting</span>,{" "}
            <span className="font-bold text-indigo-700">move-all button</span>,{" "}
            and <span className="font-bold text-indigo-700">item swapping</span>
            . <span className="font-bold text-indigo-700">Auto-sorting</span>{" "}
            will automatically "stack" the same items as well as sort the by
            best quality first. The{" "}
            <span className="font-bold text-indigo-700">move-all button</span>{" "}
            will automatically move all items from one inventory to another (for
            example, player inventory -&gt; chest or chest -&gt; player
            inventory). It will also autosort everything as well. The{" "}
            <span className="font-bold text-indigo-700">item swapping</span>{" "}
            functionality lets the player swap one item from their inventory
            with another and works across all inventory objects.
          </p>
        </div>
        <h2 className="pt-10 pb-4">Inventory System</h2>
        <div className="col-span-4">
          <p className="py-4">
            First up is how I handle the inventory icons. I made a giant sprite
            sheet of all the icons an inventory can have so that I can the file
            clutter limited. This requires a bit of math to get working, but
            once it's done adding new items is very simple!
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-6"
            src="/assets/projects/arcane/item-sheet.PNG"
            alt="/"
            height={500}
            width={500}
          />
          <p className="py-4">
            Now for the variable setup. GameMaker doesn't have an easy way to do
            UI design yet, so everything UI related has to be done manually.
            It's probably the worst part about the engine, but I still enjoy
            using it nonetheless! Basically all of the varaibles are to
            determine where everything needs to go. From button selectors to
            icons, pretty much everything has been set to a variable. There are
            a few variable that are for checking the selected slot of the
            inventory and the position of the GUI layer.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-6"
            src="/assets/projects/arcane/var-setup.PNG"
            alt="/"
            height={500}
            width={500}
          />
          <p className="py-4">
            The way I determine which icon to use from the sprite sheet is
            through an enumerator. All I did was match the icon with a naming
            convention from the enumerator, so a red potion would be enumerated
            as RedPotion. This indexing makes it really easy to find the correct
            item when I need it. The enumerator is long, but adding to it is
            very straight forward. Just add the new item in the spritesheet then
            put it in the enumerator.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-6"
            src="/assets/projects/arcane/enum.PNG"
            alt="/"
            height={500}
            width={500}
          />
          <p className="py-4">
            The inventory is an array of structs with values such as name,
            quality, amount, enumerated value, etc. I found this to be a very
            simple solution and allows me to use do notation to easily find
            attributes of the items.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-6"
            src="/assets/projects/arcane/inventory-populating.PNG"
            alt="/"
            height={500}
            width={500}
          />
          <p className="py-4">
            Now for the logic that tells you which slot is selected in the
            inventory. First step is I get the mouse's x and y position in the
            GUI layer. Next is to setup so temporary variables that account for
            the size of each slot as well the the buffer zone that spaces each
            lot in the x and y direction.
          </p>
          <p>
            Then I like to 0 off the value of the mouse position starting at the
            top-left of the inventory. I do this by subtracting a variable that
            contains the pixel distance away from the first slot of the
            inventory, from the mouse's position. After that it's time to do the
            math to determine which slot the player is hovering over. To do
            this, we just take the new zeroed position of the inventory and use
            the div operator with the slot size plus the buffer.
          </p>
          <p className="py-4">
            After that, you just need to make sure the mouse is within the
            inventory and if it is you can determine which slot the player is
            hovering over. I use the min function to get a integer value for the
            select_slot variable.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-6"
            src="/assets/projects/arcane/selecting-slot.PNG"
            alt="/"
            height={600}
            width={600}
          />
          <p className="py-4">
            Now we have to manually draw all of the slots and item icons. I did
            this by simply looping over how many inventory slots the players has
            and using the appropriate draw functions game maker provides. I
            won't go into too much detail in this sectio n because there's
            nothing really technical about this. Here is the code if you're
            interested though.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-6"
            src="/assets/projects/arcane/drawing-loop1.PNG"
            alt="/"
            height={600}
            width={600}
          />
          <p className="py-4">
            Next up is a seperate mouse object that handles most of the
            functionality between inventories. I chose this solution because I
            felt it was better to use one object that can interaction and
            communicate with all types of inventory systems instead of
            programming the logic seperately.
          </p>
          <p className="py-4">
            This mouse object contains 3 functions: one to check for what
            inventory the player is hovering over, another that acts as a free
            state that determines what happens when a player interacts with the
            inventory, and another that acts as the "drag" state for whern a
            player picks up an item.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-6"
            src="/assets/projects/arcane/mouseover.PNG"
            alt="/"
            height={600}
            width={600}
          />
          <Image
            className="rounded-xl group-hover:opacity-20 pb-6"
            src="/assets/projects/arcane/mouse-logic-func.PNG"
            alt="/"
            height={700}
            width={700}
          />
          <Image
            className="rounded-xl group-hover:opacity-20 pb-6"
            src="/assets/projects/arcane/mouse-drag-func.PNG"
            alt="/"
            height={700}
            width={700}
          />
          <p className="py-4">
            Couple things of note from the above images, first is the
            information these functions can receive. Because of how the
            inventory objects are setup, I can easily get which inventory the
            player is hovering over, which slot they're hovering over, and in
            turn which item is in that selected slot from EVERY inventory added
            to the game. For refernce, I've added 5 unique inventories easily!
          </p>
          <p className="py-4">
            Another thing you may have seen me highlight in the second image is
            the functions I've created for this system. Since the mouse objects
            has so much information about the inventories, I was able to create
            some pretty useful quality of life features for players! First let's
            see the InventorySearch function
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-2"
            src="/assets/projects/arcane/inv-search.PNG"
            alt="/"
            height={700}
            width={700}
          />
          <p className="py-4">
            This function can be called from any inventory and is the backbone
            for some other functions. Basically it just searchs for a specific
            item in the player inventory or the chest inventory.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-2"
            src="/assets/projects/arcane/inv-addremove.PNG"
            alt="/"
            height={700}
            width={700}
          />
          <p className="py-4">
            These function can be called from any inventory and allows for the
            addition or removal of any item in the game. It will add/remove all
            the appropriate data that an item should have.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-2"
            src="/assets/projects/arcane/inv-stack-swap.PNG"
            alt="/"
            height={700}
            width={700}
          />
          <p className="py-4">
            These functions are used when adding or swapping stacks of items in
            the same inventory of the same type. Looking back, this may be a bit
            redundant because the next function allows for stack swapping
            between different inventories.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-2"
            src="/assets/projects/arcane/inv-other-stack.PNG"
            alt="/"
            height={700}
            width={700}
          />
          <p className="py-4">
            These functions are used for stacking as well. The second takes in
            the inventory your moving from and to, as well as the slot from and
            to, then appropriately sets the important item data and removes the
            other.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-2"
            src="/assets/projects/arcane/inv-moveall.PNG"
            alt="/"
            height={700}
            width={700}
          />
          <p className="py-4">
            This function is one of my favorites from the inventory system. It
            uses a double loop to do a few things. First it loops through all of
            the selected inventories slots and at each iteration, it checks if
            the other inventory has that item in any of its slots. If it does,
            then it will automatically stack those items together. This allows
            players to stay organized with their items and to not have seperate
            stacks taking up valuable inventory space. This function is very
            useful when it comes to unloading player inventories into chest
            inventories!
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-2"
            src="/assets/projects/arcane/inv-sort-add1.PNG"
            alt="/"
            height={700}
            width={700}
          />
          <p className="py-4">
            This first function does three things. First is makes sure if you
            have multiple stacks of the same item, it will stack them for you
            with the InventoryStackAll function. The second part sorts the items
            based on their quality values. The thrid part sorts the newly sorted
            items on the amount of each item. So the end result is fully
            stacked, highest quality, and highest amount item first. The second
            function was a very small use case where I simply needed to add one
            item to an inventory.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-2"
            src="/assets/projects/arcane/inv-stackall.PNG"
            alt="/"
            height={700}
            width={700}
          />
          <p className="py-4">
            This final function uses a double loop to check if you have multiple
            stacks of the same item and if you do, simply stacks them together.
            It uses two loops because you need one to check the current
            inventory slots items and the other to check all of the other slots
            other than the first one for the same item. Here is the final result
            in action:
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20 pb-2"
            src="/assets/projects/arcane/inv.gif"
            alt="/"
            height={700}
            width={700}
          />
          <p className="py-4">
            That's a high level overview of the inventory system. There was way
            too much to cover in detail but hopefully you can see the ease of
            use I put in place for players! This was a very enjoyable system to
            work on, if you want to see more
            <p className="underline cursor-pointer text-indigo-600 font-bold">
              <Link href="/games">Go Here</Link>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
