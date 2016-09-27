class Speaker < User

  alias_attribute :link, :url

  has_many :events, dependent: :restrict_with_error, through: :talks
  has_many :talks, dependent: :restrict_with_error, inverse_of: :speaker

  default_scope -> { where('talks_count > 0') }

end
