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
             votedIPs: [],
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
export const votePoll = async (req, res) => {
    try {
        const { id } = req.params;
        const { optionIndex } = req.body;

        const poll = await Poll.findById(id);

        if (!poll) {
            return res.status(404).json({
                success: false,
                message: "Poll not found.",
            });
        }

        if (
            optionIndex < 0 ||
            optionIndex >= poll.options.length
        ) {
            return res.status(400).json({
                success: false,
                message: "Invalid option index.",
            });
        }

        // Get the client's IP address
        const ip = req.ip;

        // Check if this IP has already voted
        if (poll.votedIPs.includes(ip)) {
            return res.status(400).json({
                success: false,
                message: "You have already voted.",
            });
        }

        // Increase the vote count
        poll.options[optionIndex].votes += 1;

        // Store the IP address
        poll.votedIPs.push(ip);

        // Save the updated poll
        await poll.save();

        res.status(200).json({
            success: true,
            message: "Vote recorded successfully.",
            data: poll,
        });

    } catch (error) {
        console.error("Error voting:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
export const getPollById = async (req, res) => {
  try {
    const { id } = req.params;

    const poll = await Poll.findById(id);

    if (!poll) {
      return res.status(404).json({
        success: false,
        message: "Poll not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: poll,
    });
  } catch (error) {
    console.error("Error fetching poll:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};