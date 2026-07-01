import Poll from "../models/poll.model.js";

export const createPoll = async (req,res)=>{
    try {
        const { question, options}=req.body;
        if(!question ||!options){
            return res.status(400).json({
                success:false,
                message: "Question and options are required.",
            });
        }
        if(!Array.isArray(options)||options.length<2){
            return res.status(400).json({
                success:false,
                message: "A Poll must contain at least two  options.",
            })
        }

        const formattedOptions=options.map((option)=>({
            text: option,
        }))
        const poll = await Poll.create({
            question,
            options: formattedOptions,
        });
        
        res.status(201).json({
            success: true,
            message: "Poll created successfully.",
            data:poll,
        })

    }
    catch (error){
        console.error("Error creating poll:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }

}
export const getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find();

    res.status(200).json({
      success: true,
      count: polls.length,
      data: polls,
    });
  } catch (error) {
    console.error("Error fetching polls:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};