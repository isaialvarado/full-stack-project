## Component Hierarchy

**ShareDeals**
  - Header

**AuthFormContainer**
 - AuthForm

**DealFormContainer**
 - DealForm

**DealsIndexContainer**
 - DealsIndex
  + DealsIndexItem

**DealDetailContainer**
 - DealDetail

**CommentsContainer**
 - Comments
  + CommentsForm

**SearchResultsContainer**
 - DealsIndex
  + DealsIndexItem

**FilterContainer**
 - Filter

**UserProfileContainer**
 - UserProfile
 - UserHistory

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "ShareDeals" |
| "/:dealId" | "DealDetailContainer" |
| "/new-deal" | "DealFormContainer" |
| "/search-results" | "SearchResultsContainer"
| "/users/:userId" | "UserProfileContainer" |
| "/users/:userId/deals" | "UserHistory" |
