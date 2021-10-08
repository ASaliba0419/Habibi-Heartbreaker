# PROJECT ISSUE TICKET

## Unexpected Behavior

Yesterday during TA hours we fixed my Delete comment button, but in doing so it broke my add comment button

## Expected Behavior

I expected both buttons to work without one breaking 

## Reproduce the Error

```md

In support controller comment out lines 64 and 65 to add comment
then comment out line 63 and comment back in 64 and 65 to delete the comment
```

## Documentation

```md
ActionController::ParameterMissing in SupportsController#destroy
param is missing or the value is empty: support
Did you mean?
controller
action
id
Extracted source (around line #59):
57  # Only allow a list of trusted parameters through.
58  def support_params
59  params.require(:support).permit(:image, :description, :user_id)
60  end
61
62 def only_user_crud

```

