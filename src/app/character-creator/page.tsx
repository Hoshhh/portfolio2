import Image from "next/image";
import layers from "../../../public/assets/projects/arcane/layers.png";
import colors from "../../../public/assets/projects/arcane/colors.png";
import creator from "../../../public/assets/projects/arcane/creator.gif";
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
            This project was made with the GameMaker engine. I've been using
            this engine for years and is where I originally started programming.
          </p>
          <p className="mt-4">
            This project was inspired by the game Stardew Valley. I've played
            Stardew Valley for many hours and was very impressed that the game
            was made by a single person. I decided to do my own twist on this
            farming genre by basing the game on a wizard who would grow various
            herbs and create potions from their harvest to sell. I have
            implemented various systems already, but have many plans in store
            for this project! This page will cover my implementation of these
            systems and the design choices I've made so far.
          </p>
        </div>
        <h2 className="pt-10 pb-4">Character Creator</h2>
        <div className="col-span-4">
          <p>
            I guess before I can explain how the character creator works, I
            should give a brief explination of how I handle sprites in this
            game.
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20"
            src="/assets/projects/arcane/layers.png"
            alt="/"
            height={500}
            width={500}
          />
          <p className="py-4">
            My character sprite sheets seperate each body part of the
            player(this is important later). Using GameMaker's built-in
            function:
            <span className="font-bold">
              draw_sprite_part_ext(sprite, subimg, left, top, width, height, x,
              y, xscale, yscale, colour, alpha);
            </span>
          </p>
          <p className="py-4">
            I was able to layer the body parts of the sprite on top of each
            other. Normally GameMaker handles animation out of the box, but
            using this function to draw the sprite, I had to make my own
            animation logic that would allow me to animate each layer.
          </p>
          <p className="p-4 bg-slate-800 text-slate-100 rounded-xl w-2/3">
            <span className="text-green-400">
              //Increment frame for animation
            </span>
            <br />
            x_frame += anim_spd/60;
            <br />
            if(x_frame &gt;= anim_len) x_frame = 0;
            <br />
          </p>
          <p className="py-4">
            anim_len is set to the number of frames in the animation, so this
            gives me a value from 0 - anim_len which will allow me to increment
            to the next frame on the sprite sheet after doing a little bit of
            math. You may have noticed that the spritesheet is also in
            greyscale. This was a design decision for the character creator
            because I wanted the player to be able to change skin tone and the
            color of their clothes/staff. I did this with a shader that checks
            for certain color pixels and it does this for each seperate layer
            using a global struct that has all the color values stored in it.
          </p>
          <p className="p-4 bg-slate-800 text-slate-100 rounded-xl w-2/3">
            <span className="text-green-400">//Arm Staff</span>
            <br />
            with_shader(sh_Colorize, function() {`{`}
            <br />
            var y_frame = 1;
            <br />
            var xx = x-x_offset;
            <br />
            var yy = y-y_offset;
            <br />
            <br />
            shader_set_uniform_f_array(in_threshold,
            global.coloring.staff.v_threshhold);
            <br />
            shader_set_uniform_f_array(in_red, global.coloring.staff.v_red);
            <br />
            shader_set_uniform_f_array(in_green, global.coloring.staff.v_green);
            <br />
            shader_set_uniform_f_array(in_blue, global.coloring.staff.v_blue);
            <br />
            <br />
            draw_sprite_part_ext(spr, 0, floor(x_frame)*frame_size, y_frame,
            frame_size, frame_size, xx,yy,scale,scale,c_white,1);
            <br />) {`}`}
            <br />
            <br />
            <br />
            <br />
            <span className="text-green-400">//Body</span>
            <br />
            with_shader(sh_Colorize, function() {`{`}
            <br />
            var y_frame = 32;
            <br />
            var xx = x-x_offset;
            <br />
            var yy = y-y_offset;
            <br />
            <br />
            shader_set_uniform_f_array(in_threshold,
            global.coloring.body.v_threshhold);
            <br />
            shader_set_uniform_f_array(in_red, global.coloring.body.v_red);
            <br />
            shader_set_uniform_f_array(in_green, global.coloring.body.v_green);
            <br />
            shader_set_uniform_f_array(in_blue, global.coloring.body.v_blue);
            <br />
            <br />
            draw_sprite_part_ext(spr, 0, floor(x_frame)*frame_size, y_frame,
            frame_size, frame_size, xx,yy,scale,scale,c_white,1);
            <br />){`}`}
          </p>
          <p className="py-4">
            Since x_frame will always be 0 - anim_len, I only have to change the
            y_frame to match the number of pixels down the sprite sheet for each
            body part. Each "part" of the sprite sheet is 32x32 so I just need
            to increase y_frame by 32 for each layer. As for the shaders, I had
            never worked with them before so there was a lot I had to learn. For
            instance, I learned the thereshold values don't use values up to
            255. They use values from 0-1 so I had to get the cooresponding
            values for every color in my pallete. Here's a look at what setting
            up the shader colors looked like:
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20"
            src="/assets/projects/arcane/colors.png"
            alt="/"
            height={500}
            width={500}
          />
          <p className="py-4">
            There's a total of 18 colors so this took me a while to do. From
            there the colors are picked from a menu and actually uses the
            image_index of a "color" sprite to choose the appropriate color for
            each part. The resulting image_index cooresponds to a color from an
            array that stores all the color options then sets up the global
            color struct. The end result looks like this:
          </p>
          <Image
            className="rounded-xl group-hover:opacity-20"
            src="/assets/projects/arcane/creator.gif"
            alt="/"
            height={800}
            width={800}
          />
          <p className="py-4">
            That's a high level overview of the character creator so far. The
            system was built to easily be expanded on so if I ever decided to
            allow players to change hats, clothes, or facial features, it would
            be rather easy to add in! If you want to learn more about how I
            design other systems
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
