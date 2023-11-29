import { Link } from "react-router-dom";
import {Button} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const OurPackages = () => {
   return (
		<div>
			<div className="flex justify-center mt-6">
				<Link to={"/allpackages"}>
					<Button
						rightIcon={<ArrowForwardIcon />}
						colorScheme="orange"
						variant="outline"
					>
						All Packages
					</Button>
				</Link>
			</div>
		</div>
   );
};

export default OurPackages;